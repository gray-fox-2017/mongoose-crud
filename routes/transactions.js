var express = require('express');
var router = express.Router();
var transactionController = require('../controllers/transaction-controller')

router.get('/', transactionController.findAll);

// create new transaction
router.post('/', transactionController.newTransaction)

// delete transaction
router.delete('/:id', transactionController.deleteTransaction)

// update transaction
router.put('/:id', transactionController.updateTransaction)

// get transaction by id
router.get('/:id', transactionController.getOneTransaction)

module.exports = router;
