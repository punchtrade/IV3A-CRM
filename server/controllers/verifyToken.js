const jwt = require('jsonwebtoken');
const config = require('../configs/default');

async function verifyToken (req, res, next) {
    const token = req.headers['Bearer Token'];
    if (!token) {
        return res.status(401).send({
            auth: false,
            message: 'No token provided'
        });
    }
    const decoded = await jwt.verify(token, config.secret_key);
    req.userId = decoded.id;
    next();
}

module.exports = verifyToken;