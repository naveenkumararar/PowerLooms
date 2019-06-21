const transactionDto = require('../dto/transactionDto')

let addTransaction = function(req) {
    return new Promise(async function(resolve, reject) {
        try {

            console.log(req.id)
            let result = await transactionDto.findOneAndUpdate({
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
let getAllTransactions = function(req) {
    return new Promise(async(resolve, reject) => {
        try {
            let result = await transactionDto.find();
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}
let updateTransaction = async function(query) {
    return new Promise(async(resolve, reject) => {
        try {
            resolve(await transactionDto.findOneAndUpdate({
                _id: query.query._id
            }, query.update))
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    addTransaction: addTransaction,
    getAllTransactions: getAllTransactions,
    updateTransaction: updateTransaction
}