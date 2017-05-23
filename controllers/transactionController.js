var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

var Transaction = require('../models/transaction')