// model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create the blockchain schema
const BlockchainSchema = new Schema({
    index: {
        required: true,
        type: Schema.Types.Number,
    },
    timestamp: {
        required: true,
        type: Schema.Types.Date,
        default: Date.now(),
    },
    prevHash: {
        required: false,
        type: Schema.Types.String,
    },
    hash: {
        required: true,
        type: Schema.Types.String,
    },
    
    //custom blocks
    gitag: {
        required: true,
        type: Schema.Types.Array,
    },

    product: {
        required: true,
        type: Schema.Types.Array,
    },

    ownership: {
        required: true,
        type: Schema.Types.Array,
    },

    transactiondetails: {
        required: true,
        type: Schema.Types.Array,
    },

    userdetails: {
        required: true,
        type: Schema.Types.Array,
    }
});

module.exports = mongoose.model("Blockchain", BlockchainSchema);