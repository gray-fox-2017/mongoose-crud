const express = require('express')
const router = express.Router();
var Books= require('../controller/books_controller')

router.get('/', Books.findAllBooks);
router.get('/:id', Books.findOneBook);
router.post('/', Books.InsertBook)
router.put('/:id', Books.updateBook)
router.delete('/:id', Books.deleteBook)

module.exports = router;
