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

router.get('/car', async (req, res) => {
  console.info('obtener datos coche');
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

router.put('/car/:_id', async (req, res) => {
  const { carSchema } = req.params;
  const { _id } = req.params;
  const { car } = req.body;
  const carUpdated = await carModel.findByIdAndUpdate(
    _id,
    {
      $push: { cars: car },
    },
    { useFindAndModify: false }
  );
  res.send(`${carUpdated} updated`);

});

module.exports = router;


