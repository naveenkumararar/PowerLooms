const categoryDao = require('../models/dao/categoryDao')
let addCategory = function(req, res) {
    try {
        let result = categoryDao.addCategory(req.body);
        res.send({
            code: 200,
            status: 'successfully added'
        })
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
let updateCategory = async function(req, res) {
    try {
        let queryString = {
            query: {
                _id: req.params.id
            },
            update: req.body
        }
        let result = await categoryDao.updateCategory(queryString)
        res.send('Record Updated Successfully')
    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    addCategory: addCategory,
    getAllCategorys: getAllCategorys,
    updateCategory: updateCategory
}