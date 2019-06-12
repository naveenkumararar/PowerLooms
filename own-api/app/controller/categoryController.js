const categoryDao = require('../models/dao/categoryDao')
let addCategory = function(req, res) {
    try {
        let result = categoryDao.addCategory(req.body);
        res.send('successfully added')
    } catch (err) {
        res.send(err)
    }
}
let getAllCategorys = async function(req, res) {
    try {
        let result = await categoryDao.getAllCategorys(req.body);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    addCategory: addCategory,
    getAllCategorys: getAllCategorys
}