const router = require("express").Router();
const jwt = require("jsonwebtoken");
const http = require("../util/http");
const User = require("../model/user");
const auth = require("../middleware/auth");
const config = require("../app.config");
const bcrypt = require("bcrypt");

router.post("/login", auth({ block: false }), async (req, res) => {
  const payload = req.body;
  if (!payload) return res.status(400).send("Nice try1");

  const code = payload.code;
  const provider = payload.provider;
  if (!code || !provider) return res.status(400).send("Nice try2");
  if (!Object.keys(config.auth).includes(provider))
    return res.status(400).send("Nice try3");

  const configProvider = config.auth[provider]; // google or github or login_form_password
  const link = configProvider.tokenEndpoint;

  // our own http module
  const response = await http.post(
    link,
    {
      code: code,
      client_id: configProvider.clientId,
      client_secret: configProvider.clientSecret,
      redirect_uri: configProvider.redirectUri,
      grant_type: "authorization_code",
    },
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!response) return res.status(500).send("Token provider error");
  if (response.status !== 200) return res.status(401).send("Nice try4");

  let oId;
  const onlyOauth = !response.data.id_token;
  if (onlyOauth) {
    let accessToken = response.data.access_token;
    const userResponse = await http.post(
      configProvider.userEndpoint,
      {},
      {
        headers: {
          authorization: "Bearer " + accessToken,
        },
      }
    );
    if (!userResponse) return res.status(500).send("provider error");
    if (userResponse.status !== 200) return res.status(401).send("Nice try5");
    oId = userResponse.data.id;
  } else {
    const decoded = jwt.decode(response.data.id_token);
    if (!decoded) return res.status(500).send("provider token error");
    oId = decoded.sub;
  }

  const key = `providers.${provider}`;
  // console.log(key);
  // console.log("oId: ", oId);
  let user = await User.findOne({ [key]: oId }); // already "registered" user in DB
  if (user && res.locals.user?.providers) {
    user.providers = { ...user.providers, ...res.locals.user.providers }; // append a new provider to its existing one
    user = await user.save();
  }

  const token = jwt.sign(
    {
      userId: user?._id,
      providers: user ? user.providers : { [provider]: oId },
    },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  ); // conditional chaining bro
  res.status(200).json(token);

  /*
  itt FE-en ha nincs userid a most visszakuldott tokenben, akkor latni fog egy formot, csinaljon profilt !!!!
  */
});

router.post("/create", auth({ block: true }), async (req, res) => {
  if (!req.body?.username) return res.sendStatus(400);
  const userExists = await User.findOne({ username: req.body.username });

  if (userExists) return res.status(422).json({ error: "User already exists" });
  const user = await User.create({
    username: req.body.username,
    providers: res.locals.user.providers,
  });

  const token = jwt.sign(
    { userId: user._id, providers: user.providers },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );
  res.status(200).json(token);
});

//registrate from form
router.post("/form_register", async (req, res) => {
  const { username, password, cpassword } = req.body;

  if (!username || !password || !cpassword) {
    return res.status(422).json({ error: "You need to fill all inputs" });
  }

  try {
    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.status(422).json({ error: "User already exists" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "Passwords are not matching" });
    } else {
      //hash password with bcrypt
      const salt = await bcrypt.genSalt(6);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = new User({ username, password: hashedPassword });
      await user.save();
      // console.log("saved");
      return res.status(201).json({ message: "User successfully registered!" });
    }
  } catch (error) {
    res.status(400).send({ error: "Something went wrong while registrating" });
  }
});

router.post("/form_login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(422).json({ error: "You need to fill all inputs" });
  }
  try {
    const userExists = await User.findOne({ username });
    const hashedPassword = userExists.password;
    const validPassword = await bcrypt.compare(password, hashedPassword);
    if (!userExists || !validPassword)
      return res.status(422).json({ error: "Wrong username or password!" });
    res.status(201).json({ message: "Logged in successfully" });
  } catch (error) {
    res.status(400).json({ error: "Somethin went wrong while logging in" });
  }
});

router.post("/add-to-mycoin", async (req, res) => {
  const { id, name, user } = req.body;
  if (!id) return res.status(422).json({ error: "No Coin id!" });

  // console.log(id)
  try {
    const symbolExists = await User.findOne({ "coins.id": id });
    console.log(symbolExists);

    if (symbolExists) {
      console.log(symbolExists);
      return res.status(422).json({ error: "Coin already saved" });
    }

    await User.updateOne(
      { user: req.body.user },
      { $push: { coins: { id, coin_name: name } } }
    );
    res.status(201).json({ message: "Coin saved to MyCoin" });
  } catch (error) {
    res.status(400).send({
      error: "Something went wrong while savin Coin. Try to Login again!",
    });
  }
});

router.post("/remove-from-mycoin", async (req, res) => {
  const { id, user } = req.body;
  if (!id) return res.status(422).json({ error: "No Coin id!" });

  try {
    const symbolExists = await User.findOne({ "coins.id": id });

    if (!symbolExists) {
      return res.status(422).json({ error: "Coin already removed" });
    }

    await User.findOneAndUpdate({ user: user }, { $pull: { coins: { id } } });
    res.status(200).json({ message: "Coin removed from MyCoin" });
  } catch (error) {
    res.status(400).send({
      error: "Something went wrong while removing Coin. Try to Login again!",
    });
  }
});

router.post("/add-transaction", async (req, res) => {
  try {
    const { quantity, pricePerCoin, fee, buyDate, user, coinId } = req.body;

    if (!quantity && !pricePerCoin)
      return res
        .status(422)
        .json({ error: "Quantity and Price Per Coin is required, and has to be a Number!" });

    await User.updateOne(
      { _id: user.userId, "coins.id": coinId },
      {
        $push: {
          "coins.$.portfolio": {
            quantity,
            price_per_coin: pricePerCoin,
            fee,
            date_buyed: buyDate,
          },
        },
      }
    );
    res.status(201).send({ message: "Transaction saved to portfolio." }); //message: "Transaction saved to portfolio."
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/get-transactions", async (req, res) => {
  try {
    const { coinId, userId } = req.query;
    const user = await User.findOne(
      { _id: userId, "coins.id": coinId },
      "coins.portfolio"
    );

    res.status(200).send(user);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/get-saved", async (req, res) => {
  const savedCoins = await User.findOne({ user: req.body.user });
  console.log(savedCoins);
  res.status(200).send(savedCoins);
});

router.post("/save-profile", async (req, res) => {
  const { firstName, lastName, birdthDate, country, user } = req.body;
  console.log(user);
  try {
    await User.findByIdAndUpdate(
      { _id: user.userId },
      {
        profile: {
          first_name: firstName,
          last_name: lastName,
          birdth_date: birdthDate,
          country,
        },
      }
    );
    res.status(201).json({ message: "Profile saved!" });
  } catch (error) {
    res.status(400).send({
      error: "Something went wrong while savin Profile. Try to Login again!",
    });
  }
});

router.post("/get-profile-data", async (req, res) => {
  try {
    const { user } = req.body;
    // console.log('user: ', user)
    const profileData = await User.findById({ _id: user.userId });
    res.send(profileData.profile);
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = router;

/*
google:
https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=651816047225-1us03r4vchvce7h51t0c49f4u0ip7ubm.apps.googleusercontent.com&redirect_uri=http://localhost:3000/callback&scope=openid%20email&prompt=select_account

github:
https://github.com/login/oauth/authorize?response_type=code&client_id=a6b3d8e1c2c6c193dac2&redirect_uri=http://localhost:3000/callback/github&scope=user%20email&prompt=select_account

http://localhost:3000/callback/github


eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlcnMiOnsiZ29vZ2xlIjoiMTA4NjExNjkzODMyNzQ3Mzk1Mjg0In0sImlhdCI6MTY1NDg1OTE2NiwiZXhwIjoxNjU0ODYyNzY2fQ.3bsjd1fhZxiYHVTb48FZPdJwlMk0jjx9oki0QsIAP20
*/
