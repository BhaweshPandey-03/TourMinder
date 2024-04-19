const express = require("express");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const BlacklistModel = require("../models/blacklist.model");
require("dotenv").config();

userRouter.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.hash(password, 5, async (err, hash) => {
    try {
      if (hash) {
        const user = new userModel({ username, email, password: hash });
        await user.save();
        res.status(200).json("new user signup successfully");
      }
    } catch (error) {
      res.status(400).json(error);
    }
  });
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await userModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, async (err, result) => {
        if (result) {
          let token = jwt.sign({ foo: "bar" }, process.env.token);
          res.status(200).json({ message: "user login successful", token, username: user.username, email: user.email });
        } else {
          res.status(400).json({ message: "please check email or password" });
        }
      });
    } else {
      res.status(400).json({ err: "user not found please signup" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

userRouter.get("/logout", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    const logout = new BlacklistModel({ token: token });
    await logout.save();
    res.status(200).json({ msg: "logout successfully" });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = userRouter;