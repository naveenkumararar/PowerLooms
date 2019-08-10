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
    expressApp.put('/users/:id', userController.updateUser);
    expressApp.delete('/users/:id', userController.deleteUser);


    expressApp.post('/items', itemController.addItem);
    expressApp.get('/items', itemController.getAllItems);
    expressApp.put('/items/:id', itemController.updateItem);
    expressApp.delete('/items/:id', itemController.deleteItem);


    expressApp.post('/warps', warpController.addWarp);
    expressApp.get('/w(ar)?ps', warpController.getAllWarps);
    expressApp.put('/warps/:id', warpController.updateWarp);
    expressApp.delete('/warps/:id', warpController.deleteWarp);


    expressApp.post('/category', categoryController.addCategory);
    expressApp.get('/category', categoryController.getAllCategorys);
    expressApp.put('/category/:id', categoryController.updateCategory);

    expressApp.post('/transactions', transactionsController.addTransaction);
    expressApp.get('/transactions', transactionsController.getAllTransactions);
    expressApp.put('/transactions/:id', transactionsController.updateTransaction);


}


exports.router = router;