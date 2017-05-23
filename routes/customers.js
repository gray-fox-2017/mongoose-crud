var express = require('express');
var router = express.Router();
var controller = require('../Controllers/controller-customers')

router.get('/', controller.read)
router.get('/:id', controller.search)
router.post('/', controller.add)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router;
