const userDao = require('../models/dao/userDao')

let addUser = function(req, res) {
    console.log('added user')
    try {
        console.log('adding user');
        let result = userDao.addUser(req);
        res.send('added suucessfully');
    } catch (err) {
        res.send('Failed suucessfully');
    }
}

let getAllUsers = async function(req, res) {
    try {
        let result = await userDao.getAllUsers(req.body);
        console.log('res----', result)
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    addUser: addUser,
    getAllUsers: getAllUsers
}