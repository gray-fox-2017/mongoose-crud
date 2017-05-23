var express = require('express');
var router = express.Router();
var customerController = require('../controllers/customer-controller')

router.get('/', customerController.findAll);

// create new customer
router.post('/', customerController.newCustomer)

// delete customer
router.delete('/:id', customerController.deleteCustomer)

// update customer
router.put('/:id', customerController.updateCustomer)

// get customer by id
router.get('/:id', customerController.getOneCustomer)

module.exports = router;
