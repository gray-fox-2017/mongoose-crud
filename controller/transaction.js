const models = require('../models/transaction');

module.exports = {
  createData: (req, res, next)=>{
    models.create(req.body, (err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  findAll: (req, res, next)=>{
    models.find({})
    .populate('booklist')
    .exec((err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  findOne: (req, res, next)=>{
    models.findById(req.params.id)
    .populate('booklist')
    .exec((err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  updateById: (req, res, next)=>{
    models.findByIdAndUpdate(req.params.id, {
      $set: {
        memberid: req.body.memberid,
        days: Number(req.body.days),
        out_date: new Date().toISOString(),
        due_date: new Date().toISOString(),
        in_date: new Date().toISOString(),
        fine: req.body.fine,
        booklist: req.body.booklist
      }
    }, {
      new: true,
    })
    .exec((err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  deleteById: (req, res, next)=>{
    models.findByIdAndRemove(req.params)
    .exec((err, result)=>{
      if(!err){
        res.send('data deleted!')
      } else {
        res.send(err)
      }
    })
  }
}
