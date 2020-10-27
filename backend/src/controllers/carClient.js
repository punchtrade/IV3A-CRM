const { Router, response } = require("express");
const router = Router();
const mongoose = require("mongoose");
const {
  mongo: { carClientsModel, clientsModel },
} = require('../../database/index');

//created car
router.post("/carClient", async (req, res, next) => {
  console.log(req.body);
  carClientsModel.find({ serialNumber: req.body.serialNumber })
    .exec()
    .then((carClient) => {
      if (carClient.length >= 1) {
        return res.status(409).json({
          message: "Car already exist",
        });
      } else {
        const carClient = new carClientsModel({
          _id: new mongoose.Types.ObjectId(),
          // id: req.body.id,
        //   card: req.body.card,
        //   carCatalogue: req.body.carCatalogue,
        //   price1: req.body.price1,
          carOrder: req.body.carOrder,
          price2: req.body.price2,
          brandId: req.body.brandId,
          modelId: req.body.modelId,
          fuelId: req.body.fuelId,
          serialNumber: req.body.serialNumber,
          date: req.body.date,
        });
        carClient
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

//get car
router.get('/carClient', async (req, res) => {
  console.info('obtener datos coche');
  await carClientsModel.find()
    .populate('CarClient', 'carClientSchema')
    .exec((err, carClient) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: err.message });
      }
      return res.status(200).json(carClient);
    });
});

module.exports = router;