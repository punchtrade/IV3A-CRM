const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Clients = require('../../../server/models/clients');
const { model } = require('../../../server/models/clients');


router.post('/newClient',  (req, res, next) => {
    console.log(req.body);
Clients.find({ email: req.body.email })
    .exec()
    .then(client => {
        if (client.length >= 1) {
            return res.status(409).json ({
                message: 'Client already exist'
            });
        } else {
            const client = new Clients({
                _id: new mongoose.Types.ObjectId,
                treatment: req.body.treatment,
                firstName: req.body.firstName,
                lastName:  req.body.lastName,
                telephone: req.body.telephone,
                email: req.body.email,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                postalCode: req.body.postalCode,
                date: req.body.date
            }); 
            client
            .save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'Client created'
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err                   
                });
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(422).json({
            error: err
        });
    });
});

module.exports = router;