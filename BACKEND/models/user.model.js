const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    followers: {
      type: Number,
    },
    following: {
      type: Number,
    },
    about: {
      type: String,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
