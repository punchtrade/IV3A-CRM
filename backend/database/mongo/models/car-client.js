const mongoose = require("mongoose");
const {Schema} = mongoose;

const carClientsSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    carOrder: {
        type: String,
        required: true,
    },
      price2: {
        type: String,
        required: true,
      },
      brandId: {
        type: String,
        required: true,
      },
      modelId: {
        type: String,
        required:  true,
      },
      fuelId: {
        type: String,
        required: true,
      },
      serialNumber: {
        type: String,
        required: true,
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
carClientsSchema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model("CarClient", carClientsSchema);
module.exports = model;