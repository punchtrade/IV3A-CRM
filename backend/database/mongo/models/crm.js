const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
      },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    dueDate: {
        type: String,
        required: false,
    },
    select: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    users: [{
      type: String,
      required:true,
    }],
    clients: [{ 
      type: Schema.Types.ObjectId,
      ref: 'Clients',
      autopopulate: true
    },
  
  ],
  
  });

schema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model("Crm", schema);
module.exports = model;