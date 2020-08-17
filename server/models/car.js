const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    // id: {
    //     type: String,
    //     required: true,
    //   },
    carCatalogue: {
        type: String,
        required: true,
      },
    carOrder: {
        type: String,
        required: true,
      },
    brand: {
        type: String,
        required: true,
      },
    model: {
        type: String,
        required: true,
      },
    fuel: {
        type: String,
        required: true,
      },
    serialNumber: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    type: {
        type: String,
        required: true,
      },
    typeSeries: {
        type: String,
        required: true,
      },
    body: {
        type: String,
        required: true,
      },
    energy: {
        type: String,
        required: true,
      },
    power: {
        type: String,
        required: true,
      },
    places: {
        type: String,
        required: true,
      },
    grossWeight: {
        type: String,
        required: true,
      },
    mma: {
        type: String,
        required: true,
      },
    payload: {
        type: String,
        required: true,
      },
    tara: {
        type: String,
        required: true,
      },
    previousNumber: {
        type: String,
        required: true,
      },
    firstRegistration: {
        type: String,
        required: true,
      },
    dateManufacture: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
});

module.exports = mongoose.model("Car", carSchema);