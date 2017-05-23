var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
    name: String,
    memberid: String,
    address: String,
    zipcode: String,
    phone: String
});

var Customer  = mongoose.model('Customer', customerSchema);

module.exports = Customer;