var express = require('express');
var router = express.Router();
var bookController = require('../controllers/book-controller')

router.get('/', bookController.findAll);

// create new book
router.post('/', bookController.newBook)

// delete book
router.delete('/:id', bookController.deleteBook)

// update book
router.put('/:id', bookController.updateBook)

// get book by id
router.get('/:id', bookController.getOneBook)

module.exports = router;
