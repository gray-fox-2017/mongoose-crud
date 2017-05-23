var express = require('express');
var router = express.Router();

var transactionController = require('../controllers/transactionController')

router.get('/', transactionController.findBooks)

router.post('/', transactionController.insertBook)

router.get('/:id', transactionController.findOne)
//
router.put('/:id', transactionController.updateBook)
//
router.delete('/:id', transactionController.deleteBook)

module.exports = router;