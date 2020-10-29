const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");
const {
    mongo: { clientsModel },
} = require('../../database/index');


//search client
router.get('/search', (req, res) => {
    console.info('obtener datos clientes');
    clientsModel.find()
        .populate('Clients', 'clientsSchema')
        .exec((err, clients) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json(clients);
        });
});

//modificated client

router.put('/clients', function (req, res, next) {
    const updateContent = {
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
    }
    clientsModel.updateOne({ card: req.body.card }, updateContent, function (err, clientsUpdate) {
        if ( updateContent.nMatched == 1 || err, updateContent.nUpserted == 0 || err, updateContent.nModified == 0 || err)
            res.json({ status: 1, message: "don't modificated client" + err });
        else
            res.json({ status: 0, message: "modificated client", data: clientsUpdate });
    });
});

router.delete('/search', (req, res, next) => {
    clientsModel.findOneAndDelete(req.params._id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;