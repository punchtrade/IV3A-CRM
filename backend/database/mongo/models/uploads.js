const mongoose = require("mongoose");
const { Schema } = mongoose;

const uploadsSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    trim: true,
  },
  desc: {
    type: String,
    trim: true,
  },
  path: {
    type: String,
    trim: true,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  clients: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Clients',
    autopopulate: true
  },
  {timestamps: true},
],
});

uploadsSchema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model("Uploads", uploadsSchema);
module.exports = model;
