var express = require('express');
var router = express.Router();
const custC = require('../controllers/customer_crud');

router.get('/', custC.showCustomers);
router.post('/', custC.createCustomer);
router.get('/:id', custC.showCustomer);
router.put('/:id', custC.updateCustomer);
router.delete('/:id', custC.deleteCustomer);

module.exports = router;
