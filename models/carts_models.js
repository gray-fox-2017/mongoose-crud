var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cart_collection = new Schema({
  invoice : {type : String},
  customer_id: [{ type: Schema.Types.ObjectId, ref: 'Customer' }],
  list_item: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
});

var Transaktion = mongoose.model('Transaksi', cart_collection);

module.exports = Transaktion;
