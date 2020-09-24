const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");
const multer = require("multer");
const config = require("../../configs/index");
const {
    mongo: { uploadsModel },
  } = require('../../database/index');

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

  //upload documents
router.post("/upload", (req, res, next) => {
    console.log(req.file);
    const images = new uploadsModel({
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
    uploadsModel.find().then((data) => {
      res.status(200).json({
        message: "Uploads list retrieved successfully!",
        uploads: data,
      });
    });
  });

  module.exports = router;