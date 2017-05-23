const Transaction = require('../models/transaction')
let methods = {}
const ObjectId = require('mongodb').ObjectID;

methods.insertOne = (req, res) => {
  console.log('Success');
  let newTransaction = new Transaction({
    memberid: req.body.memberid,
    days: req.body.days,
    fine: req.body.fine,
    booklist: []
  })

  newTransaction.save((err, record) => {
    if (err) res.send(err)
    console.log('InsertOne transaction success');
    res.send(record)
  })
}

methods.insertBooklist = (req, res) => {
  Transaction.findById(req.params.id, (err, record) => {
    if (err) res.send(err)
    console.log('GetById transaction success');
    record.booklist.push(req.body.booklist)
    record.save(err => {
      res.send(record)
    })
  })
}

methods.getAll = (req, res) => {
  Transaction.find({})
  .populate('booklist')
  .exec((err, records) => {
    if (err) res.send(err)
    console.log('GetAll transactions success');
    res.send(records)
  })
}

methods.getById = (req, res) => {
  Transaction.findById(req.params.id)
  .populate('booklist')
  .exec((err, record) => {
    if (err) res.send(err)
    console.log('GetById transaction success');
    res.send(record)
  })
}

methods.updateById = (req, res) => {
  Transaction.findById(req.params.id, (err, record) => {
    if (err) res.send(err)
    console.log('GetById transaction success');
    Transaction.updateOne({
      "_id": record._id
    }, {
      $set: {
        "memberid": req.body.memberid || record.memberid,
        "days": req.body.days || record.days,
        "fine": req.body.fine || record.fine,
        "booklist": req.body.booklist || record.booklist
      }
    }, (err, response) => {
      if (err) res.send(err)
      console.log('UpdateById transaction success');
      res.send(record)
    })
  })
}

methods.deleteById = (req, res) => {
  Transaction.findById(req.params.id, (err, record) => {
    if (err) res.send(err)
    console.log('GetById transaction success');
    Transaction.deleteOne({
      "_id": record._id
    }, (err, response) => {
      if (err) res.send(err)
      console.log('DeleteById transaction success');
      res.send(record)
    })
  })
}

module.exports = methods