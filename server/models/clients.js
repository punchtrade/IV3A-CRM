const mongoose = require("mongoose");

const clientsSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  id: {
    type: String,
    required: true,
  },
  card: {
    type: String,
    required: true,
  },
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
  telephone: {
    type: String,
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
  state: {
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
  numberOfBank: {
    type: String,
    required: true,
  },
  accountName: {
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
  branchOffice: {
    type: String,
    required: true,
  },
  addressBank: {
    type: String,
    required: true,
  },
  cityBank: {
    type: String,
    required: true,
  },
  stateBank: {
    type: String,
    required: true,
  },
  postalCodeBank: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Clients", clientsSchema);
