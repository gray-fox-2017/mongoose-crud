var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema ({
  name: String,
  memberid: String,
  address: String,
  zipcode: Number,
  phone: String
});

var customer = mongoose.model('customer',customerSchema);
module.exports = customer;
