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
module.exports = {
    addTransaction: addTransaction,
    getAllTransactions: getAllTransactions
}