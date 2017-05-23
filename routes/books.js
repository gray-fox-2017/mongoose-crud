var express = require('express');
var router = express.Router();

var bookController = require('../controllers/bookController')

router.get('/', bookController.findBooks)

router.post('/', bookController.insertBook)

router.get('/:id', bookController.findOne)
//
router.put('/:id', bookController.updateBook)
//
router.delete('/:id', bookController.deleteBook)

module.exports = router;