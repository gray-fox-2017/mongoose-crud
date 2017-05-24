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

const deleteTransaction = function(req,res) {
  transactionModel.deleteOne({
    _id : ObjectId(req.params.id)
  },function(err,result) {
    if (err) {
      res.send(err)
    } else {
      res.send(`Delete id ${req.params.id} success`)
    }
  })
}

const updateTransaction = function(req,res) {
  transactionModel.findOne({
    _id : ObjectId(req.params.id)
  },function(err,result) {
    if (err) {
      res.send(err)
    } else {
      result.memberid = req.body.memberid || result.memberid
      result.days = req.body.days || result.days
      result.out_date = req.body.out_date || result.out_date
      result.due_date = req.body.due_date || result.due_date
      result.in_date = req.body.in_date || result.in_date
      result.fine = req.body.fine || result.fine
      result.booklist = req.body.booklist.split(",") || result.booklist
      result.save(function(err,raw) {
        if (err) {
          res.send(err)
        } else {
          res.send(raw)
        }
      })
    }
  })
}

module.exports = {
  createTransaction,
  getAll,
  deleteTransaction
};
