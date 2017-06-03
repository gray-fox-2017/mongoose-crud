const Transaction = require ('../models/transactions_model')

module.exports = {
  insert: function(req, res){
    Transaction.create( req.body, function(err, record){
      err ? res.json({err}) : res.json(record)
    })
  },
  findAll: function(req, res) {
    Transaction.find({})
      .populate('booklist',"title")
      .then((err, records) => {
        err  ? res.json({ err }) : res.json(records)
      })
  },
  findById: function(req, res) {
    Transaction.findById(req.params.id)
      .populate('booklist',"title")
      .then((err, record) => {
        err  ? res.json({ err }) : res.json(record)
      })
  },
  updateById: function(req, res) {
    Transaction.findById(req.params.id, function (err, data) {
      if(err){
        res.json({err})
      } else{
        Transaction.update({_id : req.params.id}, {
          $set:{
            memberid: req.body.memberid || data.memberid,
            days: req.body.days || data.days,
            fine: req.body.fine || data.fine,
            booklist: req.body.booklist || data.booklist
          }
        }, function(err, record){
          err  ? res.json({ err }) : res.json(record)
        })
      }
    })
  },
  deleteById: function(req, res) {
    Transaction.findByIdAndRemove(req.params.id, (err, record) => {
      err  ? res.json({ err }) : res.json(record)
    })
  }
}
