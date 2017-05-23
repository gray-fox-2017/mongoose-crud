const express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
  res.send('Our site is alive, yey..');
});

module.exports = router;
