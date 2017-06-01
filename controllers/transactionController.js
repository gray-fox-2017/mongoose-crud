const Transaction = require('../models/transaction')
let methods = {}
const ObjectId = require('mongodb').ObjectID;
let helpersConvDate = require('../helpers/conver_date')

methods.insertOne = (req, res) => {
  console.log('Success');
  let outDate = new Date()
  let newTransaction = new Transaction({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: outDate,
    due_date: helpersConvDate.dueDate(req.body.days),
    booklist: req.body.booklist
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
    else {
      // console.log('GetAll transactions success');
      // let finePerDay = 1000
      // let lihatselisih = records.forEach(record => {
      //   let dueDate = record.due_date
      //   return dueDate
      //   // let outDate = record.out_date
      //   // let selisih = dueDate.getDate() - outDate.getDate()
      //   // return selisih
      // })
      // console.log(lihatselisih);
      res.send(records)
    }
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
    let inDate = new Date()
    record.fine = helpersConvDate.countFine(record.due_date)
    // console.log('+++++++');
    // console.log(helpersConvDate.countFine(record.due_date));
    record.save()
    res.send(record)
    // Transaction.updateOne({
    //   "_id": record._id
    // }, {
    //   $set: {
    //     "memberid" : record.memberid,
    //     "days" : record.days,
    //     "out_date" : record.out_date,
    //     "due_date" : record.due_date,
    //     "booklist" : record.booklist,
    //     "in_date": inDate,
    //     "fine": helpersConvDate.countFine(record.due_date)
    //   }
    // }, (err, response) => {
    //   if (err) res.send(err)
    //   else {
    //     console.log('UpdateById transaction success');
    //     res.send(record)
    //   }
    // })
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