const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  // id: {
  //     type: String,
  //     required: true,
  //   },
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
  // description: {
  //   type: String,
  //   required: true,
  // },
  // type: {
  //     type: String,
  //     required: true,
  //   },
  // typeSeries: {
  //     type: String,
  //     required: true,
  //   },
  // body: {
  //     type: String,
  //     required: true,
  //   },
  // power: {
  //     type: String,
  //     required: true,
  //   },
  // places: {
  //     type: String,
  //     required: true,
  //   },
  // grossWeight: {
  //     type: String,
  //     required: true,
  //   },
  // mma: {
  //     type: String,
  //     required: true,
  //   },
  // payload: {
  //     type: String,
  //     required: true,
  //   },
  // tara: {
  //     type: String,
  //     required: true,
  //   },
  // previousNumber: {
  //     type: String,
  //     required: true,
  //   },
  // firstRegistration: {
  //     type: String,
  //     required: true,
  //   },
  // dateManufacture: {
  //     type: String,
  //     required: true,
  //   },
  date: {
    type: Date,
    default: Date.now,
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true
  },
  clients: { 
    type: Schema.Types.ObjectId,
    ref: 'Clients',
    autopopulate: true
  }
});
carSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model("Car", carSchema);