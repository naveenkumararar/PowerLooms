const itemDao = require('../models/dao/itemDao')

let addItem = function(req, res) {
    try {
        let result = itemDao.addItem(req);
        res.send('added successfully')
    } catch (err) {
        res.send(err);
    }
}
let getAllItems = async function(req, res) {
    try {
        let result = await itemDao.getAllItems(req.body)
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    addItem: addItem,
    getAllItems: getAllItems
}