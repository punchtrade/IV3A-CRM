const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");

const {
    mongo: { leadsModel, clientsModel },
} = require('../../database/index');

//leads
router.get('/leads', (req, res) => {
    console.info('obtener datos clientes');
    leadsModel.find()
      .populate('Leads', 'leadsSchema')
      .exec((err, leads) => {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: err.message });
        }
        return res.status(200).json(leads);
      });
  });
  router.put('/clients', async (req, res, next) => {
    try {
    const updateContent =  new clientsModel({
      // _id: new mongoose.Types.ObjectId(),
      card: req.body.card,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
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
  });
await clientsModel.save();
    } catch (e) {
      console.log(e);
      res.status(500).send("There was a problem register client")
    }
  });
  router.delete('/leads', (req, res, next) => {
    leadsModel.findOneAndDelete(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  module.exports = router;