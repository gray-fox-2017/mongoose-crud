
var express = require('express');
var api = require('../controllers/customerController')
var router = express.Router();

router.get('/', api.getAllCustomers)
router.post('/', api.insertCustomer)
router.delete('/:id', api.deleteCustomer)
router.put('/:id', api.updateCustomer)

module.exports = router
