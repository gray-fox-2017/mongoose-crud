const express = require('express');
const router = express.Router();
const books = require('../controller/book');

router.post('/', books.createData);

router.get('/', books.findAll);

router.get('/:id', books.findOne);

router.patch('/:id', books.updateById);

router.delete('/:id', books.deleteById);

module.exports = router;
