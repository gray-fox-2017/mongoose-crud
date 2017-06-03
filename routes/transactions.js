var express = require('express');
var api = require('../controllers/transactionController')
var router = express.Router();

router.get('/', api.getAllTransactions)
router.post('/', api.insertTransaction)
router.delete('/:id', api.deleteTransaction)
router.put('/:id', api.updateTransaction)
router.patch('/:id', api.pushBookList)

module.exports = router
