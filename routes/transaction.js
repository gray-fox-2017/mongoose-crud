var express = require('express');
var router = express.Router();
const transactionControllers = require('../controllers/transactionControllers');

//Get all transaction
router.get('/',transactionControllers.getAll)

//Add a transaction
router.post('/',transactionControllers.createTransaction)

//Delete a transaction

//Edit a transaction

module.exports = router;
