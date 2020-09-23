const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  id: {
      type: String,
      required: false,
    },
    card: {
      type: String,
      required: false,
    },
  carCatalogue: {
    type: String,
    required: true,
  },
  price1: {
    type: String,
    required: true,
  },
  carOrder: {
    type: String,
    required: false,
  },
  price2: {
    type: String,
    required: false,
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
    required: true,
  },
  serialNumber: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true
  }],
  clients: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Clients',
    autopopulate: true
  },

],

});
schema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model("Car", schema);
module.exports = model;