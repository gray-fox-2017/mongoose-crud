
var mongoose = require('mongoose')
var Schema = mongoose.Schema


var transactionSchema = new Schema({
  id_pembeli : {
    type : Schema.Types.ObjectId,
    ref:'Customer',
    required:true
  },
  tanggal_pembelian:{
    type:Date,
    default: Date.now
  },
  total_harga:{
    type:String,
    required:true
  },
  keranjang:[{
    type : Schema.Types.ObjectId,
    ref:'Book'
  }]
})

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
