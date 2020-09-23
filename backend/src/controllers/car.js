const { Router, response } = require("express");
const router = Router();
const mongoose = require("mongoose");
const config = require("../../configs/index");
const {
    mongo: { carModel },
  } = require('../../database/index');

  //created car
router.post("/car", async (req, res, next) => {
  console.log(req.body);
  carModel.find({ brand: req.body.brand })
    .exec()
    .then((car) => {
      if (car.length >= 1) {
        return res.status(409).json({
          message: "Car already exist",
        });
      } else {
        const car = new carModel({
          _id: new mongoose.Types.ObjectId(),
          // id: req.body.id,
          carCatalogue: req.body.carCatalogue,
          price1: req.body.price1,
          carOrder: req.body.carOrder,
          price2: req.body.price2,
          brand: req.body.brand,
          model: req.body.model,
          fuel: req.body.fuel,
          serialNumber: req.body.serialNumber,
          date: req.body.date,
        });
        car
          .save()
          .then((result) => {
            console.log(result);
            res.status(201).json({
              message: "Car created",
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

module.exports = router;
  
//   module.exports = {
//     getAll: async (req, res) => {
//       const _id = await carModel.find();
//       res.json(_id);
//     },
//     createOne: async (req, res) => {
//       const { _id } = req.body;
//       const newCar = new carModel({ name });
//       await newCar.save();
//       res.send(`${_id} saved`);
//     },
//     updateOne: async (req, res) => {
//       const { _id } = req.params;
//       const { client } = req.body;
//       await carModel.findByIdAndUpdate(
//         _id,
//         {
//           $set: { client },
//         },
//         { useFindAndModify: false }
//       );
//       res.send(`${client} updated`);
//     },
//     deleteOne: async (req, res) => {
//       const { _id } = req.params;
//       const removed = await carModel.findByIdAndDelete(_id);
//       console.log(removed);
//       res.send(`${removed._id} deleted from database`);
//     },
//     assignClient: async (req, res) => {
//       const { _id } = req.params;
//       const { client } = req.body;
//       const carUpdated = await carModel.findByIdAndUpdate(
//         _id,
//         {
//           $push: { clients: client },
//         },
//         { useFindAndModify: false }
//       );
//       res.send(`${carUpdated._id} updated`);
//     },
//     removeClient: async (req, res) => {
//       const { _id } = req.params;
//       const { clients } = req.body;
//       const carUpdated = await carModel.findByIdAndUpdate(
//         _id,
//         {
//           $pull: { clients: client },
//         },
//         { useFindAndModify: false }
//       );
//       res.send(`${carUpdated._id} updated`);
//     },
//   };

  