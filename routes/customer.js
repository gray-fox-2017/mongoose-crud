const express = require('express')
const router = express.Router();
var Customer= require('../controller/customer_controller')

router.get('/', Customer.findAllCustomer);
router.get('/:id', Customer.findOneCustomer);
router.post('/', Customer.InsertCustomer)
router.put('/:id', Customer.updateCustomer)
router.delete('/:id', Customer.deleteCustomer)

module.exports = router;
