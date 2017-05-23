var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customer_collection = new Schema({
  name: String,
  memberid:   String,
  address: String,
  zipcode: String,
  phone: String
});

var Customer = mongoose.models('Customer', customer_collection);

module.exports = Customer;
