const mongoose = require('mongoose');

const preOrderSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

});

module.exports = mongoose.model('PreOrder', preOrderSchema);