const mongoose = require("mongoose");


const coinSchema = new mongoose.Schema({
  name: { type: String, required: true }, // empty string NONO!
  coin_logo: { type: String }, // empty list is default?
  coin_info: { type: String }
  // coin_....: { type: String }
  // coin_....: { type: String }
  // coin_....: { type: String }
});

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true }, // empty string NONO!
  password: { type: String },
  providers: {
    google: { type: String, sparse: true, unique: true },
    github: { type: String, sparse: true, unique: true },
    // login_form_password: { type: String, sparse: true, unique: true },
  },
  coins: [coinSchema], // empty list is default?
});

const User = mongoose.model("user", userSchema);
module.exports = User;