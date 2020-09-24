const express = require("express");
const session = require("express-session");
const redis = require("redis");
const redisStore = require("connect-redis")(session);
const nconf = require("nconf");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const { request } = require("http");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const db = require("mongodb");
const fileUpload = require("express-fileupload");
const pdf = require('html-pdf');
const flash = require('connect-flash');
const verifyToken = require('./src/middlewares/validateAuth');

// load config file
nconf
  .argv()
  .env()
  .file({
    file: __dirname + "/config.json",
  });

// connect to redis session store
const redisSessionStore = redis.createClient(
  nconf.get("redisPort"),
  nconf.get("redisHost"),
  {
    db: 0,
  }
);

redisSessionStore.on("connect", () => {
  console.log(
    `${chalk.green("✓")} Connected to ${chalk.green("Redis")} Session Store`
  );
});

// //middlewares
// app.use(verifyToken);
app.use("/uploads", express.static("uploads"));
app.use(express.static("public"));
app.use(fileUpload());
app.use(express.static(path.resolve(__dirname + "/public/")));
app.use(cors({
  origin:"http://localhost:3000",
  credentials: true
}));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(require("./src/controllers/authController"));
app.use(require("./src/controllers/car"));
app.use(require("./src/controllers/users"));
app.use(require("./src/controllers/clients"));
app.use(require("./src/controllers/search"));
app.use(require("./src/controllers/leads"));
app.use(require("../api/app"));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());

// routes
app.use(function (req, res, next) {
  req.db = db;
  next();
});

require("../backend/database/index");

//Settings
app.set("port", process.env.PORT || 9000);

app.listen("9000", function () {
  console.log("Servidor web escuchando en el puerto 9000");
});

module.exports = app;
