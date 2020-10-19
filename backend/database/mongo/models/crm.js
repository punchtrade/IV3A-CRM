const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    // id: {
    //     type: String,
    //     required: true,
    //   },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    select: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
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

const model = mongoose.model("Crm", schema);
module.exports = model;