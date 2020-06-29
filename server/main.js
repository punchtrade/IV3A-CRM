const express = require("express");
const session = require("express-session");
const redis = require("redis");
const redisStore = require("connect-redis")(session);
const nconf = require("nconf");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const { request } = require("http");
const app = express();
const morgan = require('morgan');
const cors = require('cors');



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
app.use(express.static(__dirname + '/public/'));
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// routes
app.use("/users", require("../src/core/routes/users.routes"));
app.use("/signIn", require("../src/core/routes/signIn.routes"));
module.exports = app;

//initializations

require('../src/core/database');

//Settings
app.set('port', process.env.PORT || 3000);

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});
