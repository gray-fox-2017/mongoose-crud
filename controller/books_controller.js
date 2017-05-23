var Books= require('../models/books_models')

var findAllBooks = (req,res,next) =>{
     Books.find({ }, function (err, docs) {
          if(err) {
               res.send(err.message)
          } else {
               res.send(docs)
          }
     });
}

var findOneBook = (req,res,next) =>{
     Books.findOne({ _id : req.params.id}, function (err, docs) {
          if(err) {
               res.send(err.message)
          } else {
               res.send(docs)
          }
     });
}

var InsertBook = (req,res,next) =>{
     var insert = new Books ({
          isbn: req.body.isbn,
          title:   req.body.title,
          author: req.body.author,
          category: req.body.category,
          stok : req.body.stok
     })
     insert.save((err, documents)=>{
          if(err) {
               res.send(err.message)
          } else {
               res.send(documents)
          }
     })
}


var deleteBook = (req,res,next) =>{
     Books.remove({_id:req.params.id}, (err, documents)=>{
          if(err) {
               res.send(err.message)
          } else {
               res.send(documents)
          }
     })
}


var updateBook = (req, res)=>{
 Books.findById(req.params.id, (err, data) => {
    if (err) res.send(err)
    Books.updateOne({
      _id: data._id
    }, {
      $set: {
        isbn: req.body.isbn || data.isbn,
        title: req.body.title || data.title,
        author: req.body.author || data.author,
        category: req.body.category || data.category,
        stock: req.body.stock || data.stock,
        createdAt : data.createdAt,
        updateAt : new Date().toISOString()
      }
    }, (err, result) => {
      if (err) res.send(err)
      res.send(result)
    })
 })
}




module.exports = {
  findAllBooks,
  findOneBook,
  InsertBook,
  updateBook,
  deleteBook
}
