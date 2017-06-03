const Book = require('../models/books_model')

module.exports = {
  insert : function (req, res) {
    Book.create(req.body, function(err, record) {
      err ? res.json({ err }) : res.json(record)
    })
  },
  findAll : function (req, res) {
    Book.find({}, function(err, records) {
      err ? res.json({ err }) : res.json(records)
    })
  },
  findById : function (req, res) {
    Book.findById( req.params.id , function(err, record) {
      err ? res.json({ err }) : res.json(record)
    })
  },
  updateById : function (req, res) {
    Book.findById( req.params.id , function(err, record) {
      if(err){
        res.json({ err })
      } else {
        Book.update({_id: req.params.id}, {
          $set: {
            isbn:req.body.isbn || record.isbn,
            title:req.body.title || record.title,
            image:req.body.image || record.image,
            author:req.body.author || record.author,
            category:req.body.category || record.category,
            stock:Number(req.body.stock) || record.stock
          }
        }, function(err, data) {
          err ? res.json({ err }) : res.json(data)
        })
      }
    })
  },
  deleteById : function (req, res) {
    Book.findByIdAndRemove( req.params.id )
      .exec(function(err, record) {
        err ? res.json({ err }) : res.json(record)
      })
  }

}
