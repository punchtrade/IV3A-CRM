const mongoose = require("mongoose");
const {Schema} = mongoose;

const preOrderSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  treatment: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  card: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  nameOfBank: {
    type: String,
    required: true,
  },
  iban: {
    type: String,
    required: true,
  },
  swiftCode: {
    type: String,
    required: true,
  },
  carCatalogue: {
    type: String,
    required: true,
  },
  price1: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: false,
  },
  model: {
    type: String,
    required:  false,
  },
  fuel: {
    type: String,
    required:  false,
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
],
});

preOrderSchema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model("PreOrder", preOrderSchema);

module.exports = model;
