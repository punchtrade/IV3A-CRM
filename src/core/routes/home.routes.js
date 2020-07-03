const router = require('express').Router;
const verify = require('../../../server/controllers/verifyToken');


router.get('/home', verify, (req, res) => {
    res.json({
        clients: {
            title: 'my first client',
            description: 'random client'

        }
    });
});

module.exports = router;