var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var transactionSchema = new Schema({
    id: {
        type: String
    },
    EmpNo: {
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
    }
}, {
    timestamps: true
})


var transaction = mongoose.model('transactions', transactionSchema);
module.exports = transaction