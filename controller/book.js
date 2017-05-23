var models = require('../models/book');

module.exports = {
  createData : function(req, res, next){
    models.create({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: Number(req.body.stock)
    }, (err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  findAll: (req, res, next)=>{
    models.find({}, (err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  findOne: (req, res, next)=>{
    models.findById(req.params.id, (err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  updateById: (req, res, next)=> {
    models.findByIdAndUpdate(req.params.id, {
      $set: req.body
      // {
      //   // isbn: req.body.isbn,
      //   // title: req.body.title,
      //   // author: req.body.author,
      //   // category: req.body.category,
      //   // stock: Number(req.body.stock)
      // }
    }, {
      new: true
    }).exec ((err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  deleteById: (req, res, next)=>{
    models.findByIdAndRemove(req.params.id)
    .exec((err, result)=>{
      if(!err){
        res.send('data deleted')
      } else {
        res.send(err)
      }
    })
  }
}
