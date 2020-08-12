const { Router, response } = require("express");
const router = Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("../configs/default");
const verifyToken = require("./verifyToken");
const bcrypt = require("bcrypt");
const multer = require("multer");
const User = require("../models/users");
const Clients = require("../models/clients");
const Uploads = require("../models/uploads");
const clients = require("../models/clients");
const { data } = require("jquery");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 500,
  },
  fileFilter: fileFilter,
});

router.post("/register", async (req, res, next) => {
  try {
    const { firstName, lastName, idCard, email, password } = req.body;
    // console.log(firstName, lastName, idCard, email, password );
    const user = new User({
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

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).send("The email doesn't exists");
  }

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

router.get("/dashboard", verifyToken, (req, res) => {
  res.status(200).json({ message: "dashboard" });
});

router.post("/newClient", (req, res, next) => {
  console.log(req.body);
  Clients.find({ email: req.body.email })
    .exec()
    .then((client) => {
      if (client.length >= 1) {
        return res.status(409).json({
          message: "Client already exist",
        });
      } else {
        const client = new Clients({
          _id: new mongoose.Types.ObjectId(),
          id: req.body.id,
          card: req.body.card,
          treatment: req.body.treatment,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          telephone: req.body.telephone,
          email: req.body.email,
          address: req.body.address,
          city: req.body.city,
          state: req.body.state,
          postalCode: req.body.postalCode,
          nameOfBank: req.body.nameOfBank,
          numberOfBank: req.body.numberOfBank,
          accountName: req.body.accountName,
          iban: req.body.iban,
          swiftCode: req.body.swiftCode,
          branchOffice: req.body.branchOffice,
          addressBank: req.body.addressBank,
          cityBank: req.body.cityBank,
          stateBank: req.body.addressBank,
          postalCodeBank: req.body.postalCodeBank,
          date: req.body.date,
        });
        client
          .save()
          .then((result) => {
            console.log(result);
            res.status(201).json({
              message: "Client created",
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({
              error: err,
            });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(422).json({
        error: err,
      });
    });
});

router.get('/search', (req, res, next) => {
  Clients.findOne({
    // card: req.body.card,
    // firstName: req.body.firstName,
    // lastName: req.body.lastName
  })
    .then((data) => {
      res.status(200).json({
        message: "Clients list load",
        clients: data,
      });
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "client don't exixt",
        error: err,
      });
      console.log({ message: "client don't exixt" });
    });
});


router.post("/upload", (req, res, next) => {
  console.log(req.file);
  const images = new Uploads({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    desc: req.body.desc,
    img: req.body.img,
    path: req.body.path,
    date: req.body.date,
  });
  images
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Upload successfully",
        createdImage: {
          name: result.name,
          desc: result.desc,
          img: result.img,
          path: result.path,
          _id: result._id,
          request: {
            type: "POST",
            url: "http://localhost:9000/upload" + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(500).json({
        error: err,
      });
    });
});

router.get("/upload", (req, res, next) => {
  Uploads.find().then((data) => {
    res.status(200).json({
      message: "Uploads list retrieved successfully!",
      uploads: data,
    });
  });
});

router.get("/logout", (req, res) => {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;
