var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customer_collection = new Schema({
  name: String,
  memberid:   Number,
  address: String,
  zipcode: String,
  phone: String
});

var Customer = mongoose.model('Customer', customer_collection);

module.exports = Customer;
