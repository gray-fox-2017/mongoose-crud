var express = require('express');
var router = express.Router();
var bookControllers = require('../controllers/bookControllers')

//Get all book
router.get('/',bookControllers.getAll)

//Add a book
router.post('/', bookControllers.addBook)

//Delete a book
router.delete('/:id',bookControllers.deleteBook)

//Update a book
router.patch('/:id', bookControllers.updateBook)

module.exports = router;
