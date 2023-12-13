// index.js

const mongoose = require('mongoose');
const BlockChain = require('E:/3rd Year/5th Sem/DBMS/End Sem/mern-auth/api/blockchain/Database/model.js'); // Adjust the path accordingly

mongoose.connect('mongodb://localhost:27017/Blockchain')
    .then(() => {
        console.log('Database is connected');
        connectionCallback();
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

let connectionCallback = () => {};

module.exports.onConnect = (callback) => {
    connectionCallback = callback;
};

// ... rest of the code