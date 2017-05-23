'use strict'
const express = require('express');
let router = express.Router();
let customers_controller = require('../controllers/customers_controller.js');

router.get('/:id',customers_controller.findOneCustomer);
router.get('/', customers_controller.listCustomer);
router.put('/:id',customers_controller.updateCustomer);
router.delete('/:id',customers_controller.destroyCustomer);
router.post('/',customers_controller.insertCustomer);


module.exports = router;