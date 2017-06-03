const route = require('express').Router()
const books_controller = require('../controllers/books_controller')
const customers_controller = require('../controllers/customers_controller')
const transactions_controller = require('../controllers/transactions_controller')

route.get('/books/', books_controller.findAll)
route.get('/books/:id', books_controller.findById)
route.post('/books/', books_controller.insert)
route.put('/books/:id', books_controller.updateById)
route.delete('/books/:id', books_controller.deleteById)

route.get('/customers/', customers_controller.findAll)
route.get('/customers/:id', customers_controller.findById)
route.post('/customers/', customers_controller.insert)
route.put('/customers/:id', customers_controller.updateById)
route.delete('/customers/:id', customers_controller.deleteById)

route.get('/transactions/', transactions_controller.findAll)
route.get('/transactions/:id', transactions_controller.findById)
route.post('/transactions/', transactions_controller.insert)
route.put('/transactions/:id', transactions_controller.updateById)
route.delete('/transactions/:id', transactions_controller.deleteById)

module.exports = route
