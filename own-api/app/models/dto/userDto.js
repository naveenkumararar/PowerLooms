var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
let userSchema = new Schema({

    _id: {
        type: String
    },
    name: {
        type: String
    },
    mobile: {
        type: Number
    },
    place: {
        type: String
    },
    category: {
        type: String
    }
}, {
    timestamps: true
})
var user = mongoose.model('User', userSchema);

module.exports = user;