const { Router, response } = require("express");
const router = Router();
const mongoose = require("mongoose");
const {
  mongo: { preOrderModel, clientsModel },
} = require('../../database/index');

router.get('/preOrder/clients', (req, res) => {
  console.info('obtener datos');
  clientsModel.findOne()
    .populate('Clients', 'clientsSchema')
    .exec((err, client) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: err.message });
      }
      return res.status(200).json(client);
    });
});

router.post("/preOrder", async (req, res, next) => {
  console.log(req.body);
  preOrderModel.find({ email: req.body.email })
    .exec()
    .then((preOrder) => {
      if (preOrder.length >= 1) {
        return res.status(409).json({
          message: "Pre-Order already exist",
        });
      } else {
        const preOrder = new clientsModel({
          _id: new mongoose.Types.ObjectId(),
          treatment: req.body.treatment,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          card: req.body.card,
          telephone: req.body.telephone,
          email: req.body.email,
          address: req.body.address,
          city: req.body.city,
          postalCode: req.body.postalCode,
          nameOfBank: req.body.nameOfBank,
          iban: req.body.iban,
          swiftCode: req.body.swiftCode,
          carCatalogue: req.body.carCatalogue,
          price1: req.body.price1,
          brand: req.body.brand,
          model: req.body.model,
          fuel: req.body.fuel,
          date: req.body.date,
        });
        preOrder
          .save()
          .then((result) => {
            console.log(result);
            res.status(201).json({
              message: "Commande created",
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

