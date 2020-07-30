const mongoose = require('mongoose');

const uploadsSchema = new mongoose.Schema ({
    id: mongoose.Schema.Types.ObjectId,
        name: String, 
        desc: String, 
        path: String,
        img: {data: Buffer, 
             contentType: String}
});

module.exports = mongoose.model('Uploads', uploadsSchema);