const { Router, response } = require("express");
const router = Router();
const mongoose = require("mongoose");
const {
  mongo: { clientsModel, usersModel },
} = require('../../database/index');


//created Client
router.post("/clients", async (req, res, next) => {
  console.log(req.body);
  clientsModel.find({ email: req.body.email })
    .exec()
    .then((client) => {
      if (client.length >= 1) {
        return res.status(409).json({
          message: "Client already exist",
        });
      } else {
        const client = new clientsModel({
          _id: new mongoose.Types.ObjectId(),
          id: req.body.id,
          treatment: req.body.treatment,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          card: req.body.card,
          telephone: req.body.telephone,
          email: req.body.email,
          address: req.body.address,
          city: req.body.city,
          postalCode: req.body.postalCode,
          bankAccount: req.body.bankAccount,
          bankAccount2: req.body.bankAccount2,
          bankAccount3: req.body.bankAccount3,
          nameOfBank: req.body.nameOfBank,
          iban: req.body.iban,
          swiftCode: req.body.swiftCode,
          carCatalogue: req.body.carCatalogue,
          price1: req.body.price1,
          brand: req.body.brand,
          model: req.body.model,
          fuel: req.body.fuel,
          comment: req.body.comment,
          images: req.body.images,
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

//search client
// router.get('/search', (req, res) => {
//     usersModel.find({"city": "Madrid"}).then(user => {
//     // Check if user exists
//     if (!user) {
//       return res.status(404).json({ emailnotfound: "Email not found" });
//     }
//     const payload = {
//       id: user._id,
//       email: user.email
//     };
//   console.info('obtener datos clientes');
//   clientsModel.find()
//     .populate('Clients', 'clientsSchema')
//     .exec((err, clients) => {
//       if (err) {
//         console.error(err.message);
//         return res.status(500).json({ error: err.message });
//       }
//       return res.status(200).json(clients);
//     });
// });
// usersModel.findOne( 'carmen@mail.com' )
router.get('/clients', (req, res) => {
    console.info('obtener datos cliente');
    clientsModel.find()
      .populate('Clients', 'clientsSchema')
      .exec((err, client) => {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: err.message });
        }
        return res.status(200).json(client);
      });
  });

  //put client
  // router.put('/clients', async (req, res) => {
  //   const { cars } = req.params;
  //   const { _id } = req.body;
  //   const carUpdated = await clientsModel.findByIdAndUpdate(
  //     _id,
  //     { 
  //       $push: { cars: _id},
  //     },
  //     { useFindAndModify: false }
  //   );
  //   res.send(`${carUpdated._id} updated`);

  // });
// });
  module.exports = router;