const Transaction = require('../models/transaction')
const Book = require('../models/book')
let methods = {}
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
  // console.log('********');
  // console.log(req.body.booklist[0]);
  Book.find({}, (err, records) => {
    // console.log(records);
    records.forEach(record => {
      // console.log(record._id);
      req.body.booklist.forEach(book => {
        // console.log(book);
        if (book == record._id) {
          record.stock -= 1
          record.save()
        } else {
          res.send('Stock book sedang kosong')
        }
      })
    })
    // console.log(records);

    newTransaction.save((err, response) => {
      if (err) res.send(err)
      res.send('Data berhasil di create')
    })
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
      console.log('GetAll transactions success');
      let finePerDay = 1000
      records.forEach(record => {
        let inDate = new Date()
        record.fine = helpersConvDate.countFine(record.due_date)
        record.save()
      })
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
    else {
      let inDate = new Date()
      record.fine = helpersConvDate.countFine(record.due_date)
      record.save()
      console.log('GetById transaction success');
      res.send(record)
    }
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