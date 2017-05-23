var express = require('express');
var router = express.Router();
const tranC = require('../controllers/transaction_crud');

router.get('/', tranC.showTransactions);
router.post('/', tranC.createTransaction);
router.get('/:id', tranC.showTransaction);
router.put('/:id', tranC.updateTransaction);
router.delete('/:id', tranC.deleteTransaction);

module.exports = router;
