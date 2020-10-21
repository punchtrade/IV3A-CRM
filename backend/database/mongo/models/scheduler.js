const mongoose = require('mongoose');
const {Schema} = mongoose;

const schedulerSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    clientId: { type: String, required: true },
    title: { type: String, required: true },
    roomId: { type: Number, required: true },
    members: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    departmentData: { type: String, required: true},
    consultantData: { type: String, required: true },
});

schedulerSchema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model("Scheduler", schedulerSchema);
module.exports = model;