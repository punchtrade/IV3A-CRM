const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {Schema} = mongoose;

const userSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  idCard: {
    type: String,
    required: true,
    unique: true,
    max: 45,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  cars: [{
    type: Schema.Types.ObjectId,
    ref: 'Car',
    autopopulate: true
  }],
  clients: [{
    type: Schema.Types.ObjectId,
    ref: 'Clients',
    autopopulate: true
  },
  {timestamps: true},
]
});


userSchema.methods.encryptPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model("User", userSchema);
module.exports = model;
