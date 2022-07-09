// const router = require("express").Router();
// // const User = require("../model/user");
// const auth = require("../middleware/auth");
// const Client = require("../model/client");

// /* these are REST endpoints */

// router.post("/register", async (req, res) => {
//   if(req.get("authorization") !== process.env.ADMIN_SECRET) return res.sendStatus(401)
//   console.log('body', req.body )
//   await Client.create({
//     client_id: req.body.client_id,
//     client_secret: req.body.client_secret,
//     redirect_uri: req.body.redirect_uri,
//   });
//   res.sendStatus(200); // = {user: user}
// }); // display the user's all dashboards

// router.post("/login", async (req, res) => {
//   if(req.get("authorization") !== process.env.ADMIN_SECRET) return res.sendStatus(401)
//   console.log('body', req.body )
//   await Client.create({
//     client_id: req.body.client_id,
//     client_secret: req.body.client_secret,
//     redirect_uri: req.body.redirect_uri,
//   });
//   res.sendStatus(200); // = {user: user}
// }); // display the user's all dashboards


// module.exports = router;

// /*
// dashboardS
// todoS
// */
