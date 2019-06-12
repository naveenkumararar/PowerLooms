var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var warpSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    warpProvider: {
        type: String
    },
    colorBy: {
        type: String
    },
    windedBy: {
        type: String
    },
    isssuedTo: {
        type: String
    },
    warpNo: {
        type: Number
    },
    issuedDate: {
        type: String
    }
}, {
    timestamps: true
})


var warp = mongoose.model('warps', warpSchema)

module.exports = warp;