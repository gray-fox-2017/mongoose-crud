'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: Number
})

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
