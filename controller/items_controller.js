var Item= require('../models/items_models')

var findAllItem = (req,res,next) =>{
     Item.find({ }, function (err, docs) {
          if(err) {
               res.send(err.message)
          } else {
               res.send(docs)
          }
     });
}

var findOneItem = (req,res,next) =>{
     Item.findOne({ _id : req.params.id}, function (err, docs) {
          if(err) {
               res.send(err.message)
          } else {
               res.send(docs)
          }
     });
}

var InsertItem = (req,res,next) =>{
     var insert = new Item ({
          name:   req.body.name,
          description: req.body.description,
          category: req.body.category,
          price : req.body.price,
          img_url : req.body.img_url,
           quantity: req.body.quantity
     })
     insert.save((err, documents)=>{
          if(err) {
               res.send(err.message)
          } else {
               res.send(documents)
          }
     })
}


var deleteItem = (req,res,next) =>{
     Item.remove({_id:req.params.id}, (err, documents)=>{
          if(err) {
               res.send(err.message)
          } else {
               res.send(documents)
          }
     })
}


var updateItem = (req, res)=>{
 Item.findById(req.params.id, (err, data) => {
    if (err) res.send(err)
    Item.updateOne({
      _id: data._id
    }, {
      $set: {
      name:   req.body.name || data.name,
      description: req.body.description || data.description,
      category: req.body.category || data.description,
      price : req.body.price || data.price,
      img_url : req.body.img_url || data.img_url,
       quantity: req.body.quantity || data.quantity,
      }
    }, (err, result) => {
      if (err) res.send(err)
      res.send(result)
    })
 })
}




module.exports = {
  findAllItem,
  findOneItem,
  InsertItem,
  updateItem,
  deleteItem
}
