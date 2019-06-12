const userDto = require('../dto/userDto')

let addUser = function(req) {
    return new Promise(function(resolve, reject) {
        try {
            let userResult = userDto.findOneAndUpdate({
                name: req.body.name
            }, req.body, {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true
            });
            resolve(userResult);
        } catch (err) {
            reject(err)
        }
    })
}

let getAllUsers = function(req) {
    return new Promise(function(resolve, request) {
        try {
            let result = userDto.find();
            resolve(result);
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    addUser: addUser,
    getAllUsers: getAllUsers
}