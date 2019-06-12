var userController = require('../controller/userController');
var itemController = require('../controller/itemController');
var warpController = require('../controller/warpController');
const categoryController = require('../controller/categoryController');
const transactionsController = require('../controller/transactionController')
async function router(expressApp) {

    console.log("Router called");
    expressApp.get('/', (req, res) => {
        console.log('hello');
        res.send('hi naveen')
    })

    expressApp.get('/ar', (req, res) => {
        console.log('hello');
        res.send('hi naveen')
    })

    expressApp.post('/users', userController.addUser);
    expressApp.get('/users', userController.getAllUsers);

    expressApp.post('/items', itemController.addItem);
    expressApp.get('/items', itemController.getAllItems);

    expressApp.post('/warps', warpController.addWarp);
    expressApp.get('/warps', warpController.getAllWarps);

    expressApp.post('/category', categoryController.addCategory);
    expressApp.get('/category', categoryController.getAllCategorys);

    expressApp.post('/transactions', transactionsController.addTransaction);


}


exports.router = router;