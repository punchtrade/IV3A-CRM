const mongoose = require('mongoose');

const uploadsSchema = new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
        name: {type: String, trim: true}, 
        desc: {type: String, trim: true}, 
        path: {type: String, trim: true}, 
        img: {data: Buffer, 
             contentType: String},
             date: {
                type: Date,
                default: Date.now
            }
});

module.exports = mongoose.model('Uploads', uploadsSchema);

// const mongoose = require('mongoose');

// const uploadsSchema = new mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     name: { type: String, required: true },
//     desc: { type: String, required: true },
//     clientImage: { type: String, required: true }
// });

// module.exports = mongoose.model('Uploads', uploadsSchema);