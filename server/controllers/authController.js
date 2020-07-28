const { Router } = require('express');
const router = Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../configs/default');
const verifyToken = require('./verifyToken');
const bcrypt = require('bcrypt');
const User = require('../models/users');
const Clients = require('../models/clients');

router.post('/register', async(req, res, next) => {
    try {

        const { firstName, lastName, idCard, email, password } = req.body;
        // console.log(firstName, lastName, idCard, email, password );
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            idCard: req.body.idCard,
            email: req.body.email,
            password: req.body.password,
            date: req.body.date,
        });
        user.password = await user.encryptPassword(user.password);
        await user.save();
        //create a token
        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 //expires in 24 hours
        });

        res.json({ auth: true, token });

    } catch (e) {
        console.log(e);
        res.status(500).send('There was a problem registering your user');
    }
});

router.post('/login', async(req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(404).send("The email doesn't exists");

    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(401).json({ auth: false, token: null });
    }
    // console.log(validPassword);

    const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 //24 hours
    });

    res.status(200).json({ auth: true, token });
});

router.get('/dashboard',verifyToken,(req, res) => {
    res.status(200).json ({message:'dashboard'});
});

// router.get('/home',verifyToken, async(req, res, next) => {
//     const user = await User.findById(req.userId, { password: 0 });
//     if (!user) {
//         // return {};
//         return res.status(200).send(user);
//         next();
//         console.log(user);
//         return res.status(404).send('No user found');
//         // console.log(verifyToken);
//     }   
// });
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
                id: req.body.id,
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

router.get('/newClient', (req, res, next) =>{
    res.status(200).send;
})


router.get('/logout', (req, res) => {
    res.status(200).send({ auth: false, token: null });
});



module.exports = router;