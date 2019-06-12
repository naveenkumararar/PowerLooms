var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var categorySchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    }
}, {
    timestamps: true
})

var category = mongoose.model('category', categorySchema);

module.exports = category;