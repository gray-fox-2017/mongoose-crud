var express = require('express');
var router = express.Router();
var bookController = require('../controllers/books_controller.js')
var customerController = require('../controllers/customer_controller.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express With Mongoose' });
});
//routes for books
router.post('/api/books', bookController.create)
router.get('/api/books', bookController.getAll)
router.delete('/api/books/:_id', bookController.remove)
router.put('/api/books/:_id', bookController.edit)

//routes for customer
router.post('/api/customers', customerController.create)
router.get('/api/customers', customerController.getAll)
router.delete('/api/customers/:_id', customerController.remove)
router.put('/api/customers/:_id', customerController.edit)

module.exports = router;
