const express = require('express')
const router = express.Router();
var Items= require('../controller/items_controller')

router.get('/', Items.findAllItem);
router.get('/:id', Items.findOneItem);
router.post('/', Items.InsertItem)
router.put('/:id', Items.updateItem)
router.delete('/:id', Items.deleteItem)

module.exports = router;
