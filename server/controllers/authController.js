const { Router } = require('express');
const router = Router();

const jwt = require('jsonwebtoken');
const config = require('../configs/default');
const verifyToken = require('./verifyToken');

const User = require('../models/users');

router.post('/register', async (req, res, next) => {
    try {
    
    const { firstName, lastName, idCard, email, password } = req.body;
    // console.log(firstName, lastName, idCard, email, password );
    const user = new User ({
        firstName,
        lastName,
        idCard,
        email,
        password
    });
    user.password = await user.encryptPassword(user.password);
    await user.save();
    //create a token
    const token = jwt.sign({id: user._id}, config.secret_key, {
        expiresIn: 60 * 60 * 24 //expires in 24 hours
    });

    res.json({auth: true, token});

} catch (e) {
    console.log (e);
    res.status(500).send('There was a problem registering your use');
    }
});

router.get('/home', verifyToken, async (req, res, next) => {
    const user = await User.findById(req.userId, {password: 0});
    if(!user) {
        return res.status(404).send('No user found');
    }

    res.status(200).json(user);
});

// router.get('/dashboard', verifyToken, (req, res) => {
//     res.json ('dashboard');
// })

router.post('/login', async(req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.findOne({email: req.body.email});
    if (!user) {
        return res.status(404).send("The email doesn't exists");

    }

    const validPassword =   await user.validatePassword(req.body.password, user.password);
    if (!validPassword) {
       return res.status(401).json({auth: false, token: null});
    }
    // console.log(validPassword);

    const token = jwt.sign({id: user._id}, config.secret_key, {
        expiresIn: 60* 60 * 24
    });

    res.status(200).json({auth: true, token});
});

router.get('/logout', (req, res) => {
    res.status(200).send({auth: false, token: null});
});



module.exports = router;