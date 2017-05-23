const express = require('express')
const router = express.Router()
let bookController = require('../controllers/bookController')
let customerController = require('../controllers/customerController')

// NOTE: Book
router.post('/api/books', bookController.insertOne)
router.get('/api/books', bookController.getAll)
router.get('/api/book/:id', bookController.getById)
router.put('/api/book/:id', bookController.updateById)
router.delete('/api/book/:id', bookController.deleteById)

// NOTE: Customer
router.post('/api/customers', customerController.insertOne)
router.get('/api/customers', customerController.getAll)
router.get('/api/customer/:id', customerController.getById)
router.put('/api/customer/:id', customerController.updateById)
router.delete('/api/customer/:id', customerController.deleteById)

module.exports = router