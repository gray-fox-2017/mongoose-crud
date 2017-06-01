var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/Ecommerce');

var item = new Schema({
  name:   String,
  description: String,
  category: String,
  price : String,
  img_url : String,
   quantity: String
});

var Item = mongoose.model('Book', item);

module.exports = Item;
