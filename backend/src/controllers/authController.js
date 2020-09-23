const { Router, response } = require("express");
const router = Router();
const mongoose = require("mongoose");
const config = require("../../configs/index");
const verifyToken = require("../../src/middlewares/validateAuth");
const multer = require("multer");
const User = require("../../database/mongo/models/users");
const Clients = require("../../database/mongo/models/clients");
const Uploads = require("../../database/mongo/models/uploads");
const Car = require("../../database/mongo/models/car");
const Leads = require("../../database/mongo/models/leads");
const pdfTemplate = require('../../documents');
const pdf = require('html-pdf');
const nodemailer = require('nodemailer');
const { info } = require("console");


//const uploads
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

router.put('/assignCar/:_id',  async (req, res) => {
  const { assignCar } = req.params;
  const { _id } = req.params;
  const { cars } = req.body;
  const carUpdated = await Car.findByIdAndUpdate(
    _id,
    {
      $push: { cars: cars },
    },
    { useFindAndModify: false }
  );
  res.send(`${carUpdated} updated`);

});

router.put('/assignClient/:_id',  async (req, res) => {
  const { assignClient } = req.params;
  const { _id } = req.params;
  const { clients } = req.body;
  const clientUpdated = await Clients.findByIdAndUpdate(
    _id,
    {
      $push: { clients: clients },
    },
    { useFindAndModify: false }
  );
  res.send(`${clientUpdated} updated`);

});

router.get('/getUsersClients', async (req, res) => {
  const clients = await User.find().populate('clients').exec((err,  clients) => {
  res.status(clients);
  });
  res.json(clients);
});

router.get('/getUsersCars', async (req, res) => {
  const cars = await User.find().populate('cars').exec((err,  cars) => {
  res.status(cars);
  });
  res.json(cars);
});

//dashboard
router.get("/dashboard", verifyToken, (req, res) => {
  res.status(200).json({ message: "dashboard" });
});

//upload documents
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

//invoice
router.post('/create-pdf', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

router.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`)
})

//contract
router.post('/create-pdf2', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf2', (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

router.get('/fetch-pdf2', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf2`)
})

//dates CRM


//send EMAIL

router.post("/send-email", (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "turner.jacobs@ethereal.email",
      pass: "MvxhvwXjYkAqnrEwyb",
    },
  });

  const mailOptions = {
    from: "Remitente",
    to: "cb@punchpalm.com",
    subject: "Enviado desde nodemailer",
    text: "Nous vous accompagnons dans vos démarches d'achat et d'importation de votre véhicule depuis l'Europe",
    templates: "mail-1",
  };

  console.log("Message sent: %s", info.messageId)

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      console.log("Email enviado");
      res.status(200).json(req.body);
    }
  });
});


module.exports = router;
