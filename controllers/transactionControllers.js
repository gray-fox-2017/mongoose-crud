const ObjectId = require('mongodb').ObjectId;
const transactionModel = require('../models/transaction')

const getAll = function(req,res) {
  transactionModel.find()
  .populate('booklist')
  .exec(function(err,result) {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

const createTransaction = function(req,res) {
  var outdate = new Date()
  var indate = new Date(req.body.in_date)
  var duedate = new Date(outdate.setDate(Number(outdate.getDate()) + Number(req.body.days)))
  var lateDays = indate.getDate() - duedate.getDate()
  transactionModel.create({
    memberid : req.body.memberid,
    days : req.body.days,
    out_date : new Date(),
    due_date :  outdate.setDate(outdate.getDate() + Number(req.body.days)),
    in_date : new Date(req.body.in_date),
    fine : lateDays * 1000,
    booklist : req.body.booklist.split(",")
  },function(err,result) {
    if (err) {
      res.send({msg: err})
    } else {
      res.send(result)
    }
  })
}

module.exports = {
  createTransaction,
  getAll
};
