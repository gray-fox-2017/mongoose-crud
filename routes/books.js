var express = require('express');
var router = express.Router();
const bookC = require('../controllers/book_crud');

router.get('/', bookC.showBooks);
router.post('/', bookC.createBook);
router.get('/:id', bookC.showBook);
router.put('/:id', bookC.updateBook);
router.delete('/:id', bookC.deleteBook);

module.exports = router;
