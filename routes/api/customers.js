const express = require('express');
let router = express.Router();
const customersController = require('../../controllers/customers_controller');

router.get('/', customersController.getAll);
router.get('/:id', customersController.getSingle);
router.post('/', customersController.createBook);
router.delete('/:id', customersController.deleteBook);
router.put('/:id', customersController.updateBook);

module.exports = router;
