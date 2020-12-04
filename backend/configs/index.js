module.exports = {
  port: 5000,
  secret: "mysecretkey",
  port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  saltRouds: process.env.SALT_ROUDS,
  jwtSecret: process.env.JWT_SECRET,
};

