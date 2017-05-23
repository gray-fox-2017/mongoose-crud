const express = require('express');
const router = express.Router();
const transactions = require('../controller/transaction');

router.get('/', transactions.findAll);

router.get('/:id', transactions.findOne);

router.post('/', transactions.createData);

router.put('/:id', transactions.updateById);

router.delete('/:id', transactions.deleteById);

module.exports = router;
