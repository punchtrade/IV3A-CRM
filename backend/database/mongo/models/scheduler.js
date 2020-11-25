const mongoose = require('mongoose');
const { Schema } = mongoose;

const schedulerSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    id: { type: Number, required: true },
    clientId: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    isAllDay: { type: String, required: true },
    description: { type: String, required: true },
    departmentID: { type: Number, required: true },
    consultantID: { type: Number, required: true },
});

schedulerSchema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model("Scheduler", schedulerSchema);
module.exports = model;
