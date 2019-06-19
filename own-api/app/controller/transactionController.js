const transactionDao = require('../models/dao/transactionDao');

let addTransaction = function(req, res) {
    try {
        let result = transactionDao.addTransaction(req.body)
        res.send('successfully added')
    } catch (error) {
        res.send(error)
    }
}

let getAllTransactions = async function(req, res) {
    try {
        let result = await transactionDao.getAllTransactions(req.body);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}
let updateTransaction = async function(req, res) {
    try {
        let queryParam = {
            query: {
                _id: req.params.id
            },
            update: req.body
        }
        let result = await transactionDao.updateTransaction(queryParam)
        res.send('Record Updated Successfully')
    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    addTransaction: addTransaction,
    getAllTransactions: getAllTransactions,
    updateTransaction: updateTransaction
}