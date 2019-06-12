const warpDto = require('../dto/warpDto');

let addWarp = function(req) {
    new Promise(function(resolve, reject) {
        try {
            let result = warpDto.findOneAndUpdate({
                name: req.id
            }, req, {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true
            })
            resolve(result)
        } catch (err) {
            reject(err)
        }
    });
}

let getAllWarps = function(req) {
    return new Promise(async function(resolve, reject) {
        try {
            let result = await warpDto.find();
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    addWarp: addWarp,
    getAllWarps: getAllWarps
}