const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");
const ObjectID = require('mongodb').ObjectID;
const {
    mongo: { clientsModel, usersModel },
} = require('../../database/index');
const { schedulerModel } = require("../../database/mongo");

//search client
router.get('/search', (req, res) => {
    console.info('obtener datos clientes');
    const idCard = clientsModel.find({ email: req.body.email }, { idCard: 1 });
    // const idCard = usersModel.find({"email": "carmen@mail.com"},{"idCard":1});
    const idCardU = idCard.idCard;
    //const idCardU="123456A"
    console.log(idCardU);
    clientsModel.find({ "idCardU": "123456A" })
        .populate('Clients', 'clientsSchema')
        .exec((err, clients) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json(clients);
        });
});

//Update client
router.put('/clients/modificated',  (req, res) => {
    clientsModel.findByIdAndUpdate(req.params.id, req.body)
    const client = new clientsModel({
        _id: new mongoose.Types.ObjectId(),
        id: req.body.id,
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
    client.save()
        .then(client => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

router.delete('/search', (req, res, next) => {
    clientsModel.findOneAndDelete(req.params._id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;