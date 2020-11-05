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
          card: req.body.card,
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

//get car
router.get('/car', async (req, res) => {
  console.info('obtener datos coche');
  await carModel.findOne()
    .populate('Cars', 'carSchema')
    .exec((err, car) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: err.message });
      }
      return res.status(200).json(car);
    });
});

//put user
router.put('/car/user/:_id', async (req, res) => {
  const { users } = req.params;
  const { _id } = req.body;
  const userUpdated = await carModel.findByIdAndUpdate(
    _id,
    { 
      $push: { users: _id},
    },
    { useFindAndModify: false }
  );
  res.send(`${userUpdated._id} updated`);

});

//get user
router.get('/car/user/:_id', async (req, res) => {
  console.info('obtener datos user');
  await carModel.find()
    // .populate('Cars', 'carSchema')
    .exec((err, car) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: err.message });
      }
      return res.status(200).json(car);
    });
});

//put client
router.put('/car/client/:_id', async (req, res) => {
  const { clients } = req.params;
  const { _id } = req.body;
  const clientUpdated = await carModel.findByIdAndUpdate(
    _id,
    { 
      $push: { clients: _id },
    },
    { useFindAndModify: false }
  );
  res.send(`${clientUpdated._id} updated`);

});

//get client
router.get('/car/client/:_id', async (req, res) => {
  console.info('obtener datos client');
  await carModel.find()
    .populate('Cars', 'carSchema')
    .exec((err, car) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: err.message });
      }
      return res.status(200).json(car);
    });
});

module.exports = router;


