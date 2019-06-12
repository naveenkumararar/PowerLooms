var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var itemSchema = new Schema({
    name: {
        type: String
    },
    id: {
        type: String
    },
    less: {
        type: Number
    }
}, {
    timestamps: true
})



var item = mongoose.model('items', itemSchema)

module.exports = item;
// exports.module = item