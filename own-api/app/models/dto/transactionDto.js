var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var transactionSchema = new Schema({
    empId: {
        type: String
    },
    id: {
        type: String
    },
    noOfSaree: {
        type: Number
    },
    sareeWeight: {
        type: Number
    },
    rate: {
        type: Number
    },
    item: {
        type: Number
    },
    jari: {
        type: Number
    },
    payment: {
        type: Number
    },

    // 
    date: {
        type: String
    },

    extraPayment: {
        type: Number
    },
    warp: {
        type: String
    },
    cone: {
        type: Number
    },
}, {
    timestamps: true
})


var transaction = mongoose.model('transactions', transactionSchema);
module.exports = transaction