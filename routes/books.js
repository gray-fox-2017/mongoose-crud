var express = require('express');
var router = express.Router();
var controller = require('../Controllers/controller-books.js')

router.get('/', controller.read)
router.get('/:id', controller.search)
router.post('/', controller.add)
router.post('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router;
