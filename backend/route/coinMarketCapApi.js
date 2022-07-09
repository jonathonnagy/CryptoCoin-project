const router = require("express").Router();
const http = require("axios");

// app.get('/user/:id/docs', (req, res) => {
// 	const { id } = req.params;
// 	res.send(id)
// });

router.get("/latest", async (req, res) => {
  try {
    const response = await http.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
        },
      }
    );

    //   console.log(response.data)
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
});

router.get("/info", async (req, res) => {
  const id = req.query.id;
  // console.log('this id is: ' + id)
  // res.send(id)
  try {
    const response = await http.get(
      `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${id}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
        },
      }
    );

    //   console.log(response.data)
    res.send(response.data);
  } catch (error) {
    res.status(400).json({error});
  }
});

router.get("/latest-by-id", async (req, res) => {
  const {id} = req.query;

  // console.log('this id is: ' + id)
  // res.send(id)
  try {
    const response = await http.get(
      `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${id}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
        },
      }
    );

    //   console.log(response.data)
    res.send(response.data.data);
  } catch (error) {
    console.log(error)
    // res.status(400).json({error});
  }
});

module.exports = router;
