const itemDto = require('../dto/itemDto')


let addItem = function(req) {
    return new Promise(function(resolve, reject) {
        try {
            let itemResult = itemDto.findOneAndUpdate({
                name: req.body.id
            }, req.body, {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true
            });
            resolve(itemResult)

        } catch (err) {
            reject(err)
        }
    })
};
let getAllItems = function(req) {
    return new Promise(async function(resolve, reject) {
        try {
            let result = await itemDto.find();
            resolve(result);
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    addItem: addItem,
    getAllItems: getAllItems
}