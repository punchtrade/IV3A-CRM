const { Router, response } = require("express");
const router = Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../../configs/index");
const {
    mongo: { usersModel },
  } = require('../../database/index');


//register
router.post("/register", async (req, res, next) => {
    try {
      const { firstName, lastName, idCard, email, password } = req.body;
      // console.log(firstName, lastName, idCard, email, password );
      const user = new usersModel({
          _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        idCard: req.body.idCard,
        email: req.body.email,
        password: req.body.password,
        date: req.body.date,
      });
      user.password = await user.encryptPassword(user.password);
      await user.save();
      //create a token
      const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400, //expires in 24 hours
      });
  
      res.json({ auth: true, token });
    } catch (e) {
      console.log(e);
      res.status(500).send("There was a problem registering your user");
    }
  });

  //login
router.post("/login", async (req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await usersModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send("The email doesn't exists");
    }
    console.log(user);
  
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).json({ auth: false, token: null });
    }
    // console.log(validPassword);
  
    const token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400, //24 hours
    });
  
    res.status(200).json({ auth: true, token });
  });

  //logout
router.get("/logout", (req, res) => {
    res.status(200).send({ auth: false, token: null });
  });

  module.exports = router;