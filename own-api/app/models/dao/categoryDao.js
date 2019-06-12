const categoryDto = require('../dto/categoryDto')

let addCategory = function(req) {
    return new Promise(function(resolve, reject) {
        try {
            let result = categoryDto.findOneAndUpdate({
                name: req.id
            }, req, {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true
            })
            resolve(result);
        } catch (err) {
            reject(err)
        }
    })
}

let getAllCategorys = function(req) {
    return new Promise(async function(resolve, reject) {
        try {
            let result = await categoryDto.find();
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    addCategory: addCategory,
    getAllCategorys: getAllCategorys
}