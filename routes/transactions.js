var express = require('express');
var router = express.Router();

var transactionController = require('../controllers/transactionController')

router.get('/', transactionController.getTransactions)

router.post('/', transactionController.createTransaction)

router.get('/:id', transactionController.getOneTransaction)

router.put('/:id', transactionController.updateTransaction)

router.delete('/:id', transactionController.deleteTransaction)

module.exports = router;