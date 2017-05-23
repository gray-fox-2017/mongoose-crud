var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/libraries';
mongoose.connect(url);

var Schema = mongoose.Schema;

var CustomersSchema = new Schema ({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
});

var Customers = mongoose.model('Customers', CustomersSchema);

module.exports = Customers;
