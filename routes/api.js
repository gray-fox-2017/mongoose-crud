const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book')
const customerController = require('../controllers/customer')
const transactionController = require('../controllers/transaction')

router.get('/', (req, res) => {
  res.send('From Router')
})

// NOTE: Books API
router.post('/books', bookController.insert)
router.get('/books', bookController.findAll)
router.get('/books/:id', bookController.findById)
router.put('/books/:id', bookController.update)
router.delete('/books/:id', bookController.delete)

// NOTE: Transactions API
router.post('/transactions', transactionController.insert)
router.get('/transactions', transactionController.findAll)
router.get('/transactions/:id', transactionController.findById)
router.put('/transactions/:id', transactionController.update)
router.delete('/transactions/:id', transactionController.delete)

// NOTE: Customers API
router.post('/customers', customerController.insert)
router.get('/customers', customerController.findAll)
router.get('/customers/:id', customerController.findById)
router.put('/customers/:id', customerController.update)
router.delete('/customers/:id', customerController.delete)

module.exports = router
