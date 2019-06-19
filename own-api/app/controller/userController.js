const userDao = require('../models/dao/userDao')

let addUser = function(req, res) {
    console.log("req.body", req.body)

    console.log('added user')
    try {
        console.log('adding user');
        let result = userDao.addUser(req);
        res.send({
            status: 'added suucessfully'
        });
    } catch (err) {
        res.send({
            error: 'Failed suucessfully'
        });
    }
}

let getAllUsers = async function(req, res) {
    try {
        let result = await userDao.getAllUsers(req.body);
        // console.log('res----', result)
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

let updateUser = async function(req, res) {
    let QueryAndUpdate = {
        query: {
            _id: req.params.id
        },
        update: req.body
    }
    console.log(QueryAndUpdate)
    try {
        let result = await userDao.updateUser(QueryAndUpdate);
        res.send('Record Updated Successfully')
    } catch (error) {
        res.send(error)
    }
}

let deleteUser = async function(req, res) {
    try {
        let result = await userDao.deleteUser(req.params.id)
        res.send('user deleted successfully')
    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    addUser: addUser,
    getAllUsers: getAllUsers,
    updateUser: updateUser,
    deleteUser: deleteUser
}