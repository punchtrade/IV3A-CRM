const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const mongo = require('./mongo');

mongoose.connect('mongodb://localhost/iv3a', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

    mongoose.Promise = global.Promise;

let db;



MongoClient.connect('mongodb://localhost/users', {
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        console.log(err);
        process.exit(0);
    }
   db = client.db('iv3a');
   console.log('Database is connected');
})

const getConnection = () => db;

module.exports = {
    getConnection
}


module.exports = { mongo };