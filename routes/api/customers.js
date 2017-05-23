const express = require('express');
let router = express.Router();
const customersController = require('../../controllers/customers_controller');

router.get('/', customersController.getAll);
router.get('/:id', customersController.getSingle);
router.post('/', customersController.createCustomer);
router.delete('/:id', customersController.deleteCustomer);
router.put('/:id', customersController.updateCustomer);

module.exports = router;
