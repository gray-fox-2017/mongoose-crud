const Transactions = require('../Models/transactions.js')
const ObjectId = require('mongodb').ObjectID;

function add (req,res,next){
  Transactions.create({
    memberid: req.body.memberid,
    days: req.body.days,
    fine: req.body.fine,
    booklist: req.body.booklist.split(',')
  },function(err,result){
    res.send(`Booklist with Member ID:${req.body.memberid} Created!`)
  })
}

function read (req,res,next){
  Transactions.find({})
  .populate("booklist")
  .exec(function(err,result){
    res.send(result)
  })  
}

function search (req,res,next){
  Transactions.findOne({
    "_id": ObjectId(req.params.id)
  })
  .populate('booklist')
  .exec(function(err,result){
    res.send(result)
  })
}

function remove (req,res,next){
  Transactions.remove({
    "_id": ObjectId(req.params.id)
  },function(err,result){
    res.send(`Delete Success!`)
  })
}

function addToCart (req,res,next){
  Transactions.findById(req.params.id,function(err,result){
    console.log(result.booklist);  
    
    result.booklist.push(req.body.booklist)
    result.save(function(err){
      res.send(`Book ID:${req.body.booklist} Added to cart!`) 
    })
      
    // let combine = result.booklist + "," + req.body.booklist
    // let split = combine.split(',')
    // Transactions.updateOne({
    //   "_id": result._id
    // },{
    //   $set:{      
    //     booklist: result.booklist.length < 1 ? req.body.booklist : result.booklist
    //   }
    // },function(err,result){
    //   res.send(`Book ID:${req.body.booklist} Added to cart!`)
    // })
  })
}

function update (req,res,next){
  Transactions.findById(req.params.id,function (err,result){
    res.send(`Update Success`)
    Transactions.updateOne({
      $set:{
        memberid: req.body.memberid || result.memberid,
        days: req.body.days || result.days,
        fine: req.body.fine || result.fine,
        booklist: req.body.booklist || result.booklist
      }
    })
  })
}

module.exports = {
  add,read,search,remove,update,addToCart
}