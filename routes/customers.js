var express = require('express');
var router = express.Router();

var customerController = require('../controllers/customerController')

router.get('/', customerController.getCustomers)

router.post('/', customerController.createCustomer)

router.get('/:id', customerController.getOneCustomer)
//
router.put('/:id', customerController.updateCustomer)
//
router.delete('/:id', customerController.removeCustomer)

module.exports = router;