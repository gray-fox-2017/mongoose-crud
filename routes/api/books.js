const express = require('express');
let router = express.Router();
const booksController = require('../../controllers/books_controller');

router.get('/', booksController.getAll);
router.get('/:id', booksController.getSingle);
router.post('/', booksController.createBook);
router.delete('/:id', booksController.deleteBook);
router.put('/:id', booksController.updateBook);

module.exports = router;
