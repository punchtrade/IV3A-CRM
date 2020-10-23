const mongoose = require('mongoose');
const {Schema} = mongoose;

const schedulerSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    ClientId: { type: String, required: true },
    StartTime: { type: String, required: true },
    EndTime: { type: Number, required: true },
    IsAllDay: { type: String, required: true },
    startTime: { type: Date, required: true },
    Description: { type: Date, required: true },
    DepartmentID: { type: String, required: true },
    ConsultantID: { type: String, required: true },
});

schedulerSchema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model("Scheduler", schedulerSchema);
module.exports = model;