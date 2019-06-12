const transactionDto = require('../dto/transactionDto')

let addTransaction = function(req) {
    return new Promise(function(resolve, reject) {
        try {
            let result = transactionDto.findOneAndUpdate({
                id: req.id
            }, req, {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true
            })
            resolve(result);
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    addTransaction: addTransaction
}