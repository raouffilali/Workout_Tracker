const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

// Static method to sign up a user
userSchema.statics.signup = async function (email, password) {
  // Validate
  !email || !password
    ? (() => {
        throw new Error("Email and password are required");
      })()
    : null;
  !validator.isEmail(email)
    ? (() => {
        throw new Error("Email is invalid");
      })()
    : null;
  !validator.isStrongPassword(password)
    ? (() => {
        throw new Error("Password is invalid and not strong enough ");
      })()
    : null;

  const exist = await this.findOne({ email });
  if (exist) {
    throw new Error("Email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

// Static method to login a user
// Static method to login a user
userSchema.statics.login = async function (email, password) {
  // validation
  !email || !password
    ? (() => {
        throw new Error("Email and password are required");
      })()
    : null;

  const user = await this.findOne({ email });
  !user
    ? (() => {
        throw new Error("Email does not exist");
      })()
    : null;

  const match = await bcrypt.compare(password, user.password); // corrected from 'paswword' to 'password'
  !match
    ? (() => {
        throw new Error("Password is incorrect");
      })()
    : null;

  return user;
};

module.exports = mongoose.model("User", userSchema);
