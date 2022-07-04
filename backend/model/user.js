const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  first_name: {type: String},
  last_name: {type: String},
  birdth_date: {type: String},
  country: {type: String},
})

const coinSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // empty string NONO!
  coin_name: { type: String },
  // coin_logo: { type: String }, // empty list is default?
  // coin_info: { type: String }
  // coin_added: { type: String }
  // coin_....: { type: String }
  // coin_....: { type: String }
}, { _id : false });

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true }, // empty string NONO!
  password: { type: String },
  providers: {
    google: { type: String, sparse: true, unique: true },
    github: { type: String, sparse: true, unique: true },
    // login_form_password: { type: String, sparse: true, unique: true },
  },
  coins: [coinSchema], // empty list is default?
  profile: [profileSchema],
});

const User = mongoose.model("user", userSchema);
module.exports = User;