var Book = require('../models/book')
let methods = {}

methods.getAllBooks = function(req,res){
  Book.find(function(err,result){
    if(!err){
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

methods.insertBook = function(req,res){
  Book.create(req.body, function(err, result){
    if(!err){
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

methods.findById = function(req, res){
  Book.findById(req.params.id, function(err, result){
    if(!err){
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

methods.updateBook = function(req,res){
  Book.findById(req.params.id, function(err, result){
    if(!err){
      let updateBook = {
        isbn: req.body.isbn || result.isbn,
        title:req.body.title || result.title,
        author:req.body.author || result.author,
        category:req.body.category || result.category,
        stock:req.body.stock || result.body.stock
      }
      Book.findByIdAndUpdate(req.params.id, updateBook, {new:true}, function(error, data){
        if(!error){
          res.send(data)
        } else {
          res.send(error)
        }
      })
    } else {
      res.send(err)
    }
  })
}

methods.deleteBook = function(req,res){
  Book.findByIdAndRemove(req.params.id, function(err, result){
    if(!err){
      res.send(result)
    } else {
      res.send(err)
    }
  })
}


module.exports = methods
