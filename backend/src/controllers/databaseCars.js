const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");

const {
    mongo: { carsModel },
} = require('../../database/index');

//carsDatabase
router.get('/databaseCars', (req, res) => {
    console.info('obtener datos clientes');
    carsModel.find()
      .populate('Cars', 'carsSchema')
      .exec((err, cars) => {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: err.message });
        }
        return res.status(200).json(cars);
      });
  });
  router.delete('/databaseCars', (req, res, next) => {
    carsModel.findOneAndDelete(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  module.exports = router;