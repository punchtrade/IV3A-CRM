const jwt = require("jsonwebtoken");
const config = require("../configs/default");

async function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    //Split at the space
    const bearer = bearerHeader.split(" ");
    //Get token from array
    const bearerToken = bearer[1];
    //Set the token
    req.token = bearerToken;
    //Next middleware
    next();
  } else {
    //Forbidden
    res.sendStatus(403);
  }
  // try{
  // const decoded = await jwt.verify(token, config.secret);
  // req.userId = decoded.id;
  // next();
  // } catch (err) {
  //     res.status(400).send('Invalid Token');
  // }
}

module.exports = verifyToken;
