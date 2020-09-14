const mongoose = require("mongoose");

const leadsSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  id: {
    type: String,
    required: false,
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
  card: {
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
  postalCode: {
    type: String,
    required: true,
  },
  bankAccount: {
    type: String,
    required: false,
  },
  bankAccount2: {
    type: String,
    required: false,
  },
  bankAccount3: {
    type: String,
    required: false,
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
    required: true,
  },
  model: {
    type: String,
    required:  true,
  },
  fuel: {
    type: String,
    required:  true,
  },
  comment: {
    type: String,
    required: true,
  },
  // image: {
  //   path: {
  //     type: String,
  //     trim: true,
  //     data: Buffer,
  //     contentType: String,
  //   },
  // },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Leads", leadsSchema);
