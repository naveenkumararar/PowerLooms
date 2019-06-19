const warpDao = require('../models/dao/warpDao');

let addWarp = function(req, res) {
    try {
        let result = warpDao.addWarp(req.body);
        res.send('Successfully added')
    } catch (err) {
        res.send(err)
    }
}
let getAllWarps = async function(req, res) {
    try {
        let result = await warpDao.getAllWarps(req.body)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

let updateWarp = async function(req, res) {
    try {
        let queryString = {
            query: {
                _id: req.params.id
            },
            update: req.body
        }
        let result = await warpDao.updateWarp(queryString)
        res.send('Record Updated Successfully');
    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    addWarp: addWarp,
    getAllWarps: getAllWarps,
    updateWarp: updateWarp
}