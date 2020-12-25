const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// register
exports.register = async (req, res) => {
  const { name, lastName, email, password } = req.body;
  try {
    const newUser = new User({ name, lastName, email, password });
    //check email
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email existing" });
    }

    //hash pass
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    newUser.password = hashedPassword;

    //save the user
    const newUsertoken = await newUser.save();
    const payload = {
      _id: newUsertoken._id,
      name: newUsertoken.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {});

    res.status(200).send({
      newUsertoken,
      msg: "register complited successfully",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).send("register failed");
  }
};

//login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // if exist
    const searchedUser = await User.findOne({ email });
    // if valid
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad credantial" });
    }
    // password check
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "bad credantial" });
    }
    // create token
    const payload = {
      _id: searchedUser._id,
    };
    const token = await jwt.sign(payload, process.env.SecretKey);
    //send user
    res
      .status(200)
      .send({ user: searchedUser, msg: "sucsess", token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).send({ msg: "failed to login" });
  }
};

// get current user
exports.current = (req, res) => {
  res.status(200).send({ user: req.user });
};


