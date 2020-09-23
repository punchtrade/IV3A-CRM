const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../configs/index');
const Boom = require('@hapi/boom');
module.exports = (req, res, next) => {
  try {
    const verifyToken = req.headers['authorization']
      ? req.headers['authorization'].replace('Bearer ', '')
      : undefined;
    const decodedToken = jwt.verify(token, "jwtSecret");
    req.userData = decodedToken;
    next();
  } catch (error) {
    res.send(Boom.forbidden(`Unauthorized`));
  }
};
