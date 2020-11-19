const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Validator = require('validator');
const isEmpty = require('is-empty');
const keys = require("../../configs/keys");// Load input validation
const {
    mongo: { usersModel },
  } = require('../../database/index');
// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  function validateRegisterInput(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.firstNname = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";// Name checks
    data.idCard = !isEmpty(data.idCard) ? data.idCard: "";// Name checks
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    if (Validator.isEmpty(data.firstName)) {
      errors.firstName = "Name field is required";
    }
    if (Validator.isEmpty(data.lastName)) {
      errors.lastName = "Name field is required";
    }
    if (Validator.isEmpty(data.idCard)) {
      errors.idCard = "Name field is required";
    }// Email checks
    if (Validator.isEmpty(data.email)) {
      errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
      errors.email = "Email is invalid";
    }// Password checks
    if (Validator.isEmpty(data.password)) {
      errors.password = "Password field is required";
    }if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
      errors.password = "Password must be at least 6 characters";
    }return {
      errors,
      isValid: isEmpty(errors)
    };
  };
  const  { errors, isValid } = validateRegisterInput(req.body);// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }usersModel.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new usersModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        idCard: req.body.idCard,
        email: req.body.email,
        password: req.body.password
      });// Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  function validateLoginInput(data) {
    let errors = {};// Convert empty fields to an empty string so we can use validator functions
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";// Email checks
    if (Validator.isEmpty(data.email)) {
      errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
      errors.email = "Email is invalid";
    }// Password checks
    if (Validator.isEmpty(data.password)) {
      errors.password = "Password field is required";
    }return {
      errors,
      isValid: isEmpty(errors)
    };
  };
  const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
    return res.status(400).json(errors);
  }const email = req.body.email;
  const password = req.body.password;// Find user by email
  usersModel.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          email: user.email
        };// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;