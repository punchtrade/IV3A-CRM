const jwt = require('jsonwebtoken');

const key = require('../configs/default');


module.exports = (req, res, next) => {
    try {
      const token = req.headers.split(' ');
      // console.log('CHECK SUCCESSFUL: Your token: ' + token);
      const decoded = jwt.verify(token, 'mysecretkey');
      req.userData = decoded;
      next();
    } catch (error) {
      // 401: unauthenticated
      return res.status(401).json({
        message: 'Auth failed'
      });
    }
  }