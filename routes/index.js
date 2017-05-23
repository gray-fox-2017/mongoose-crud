'use strict'
const express = require('express');
let router = express.Router();

router.get('/',(req,res,next)=>{
  res.send('bleee');
});

module.exports = router;