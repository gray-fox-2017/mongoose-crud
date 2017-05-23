const express = require('express');
const books = require('./routes/api/books');
const index = require('./routes/index');
const customers = require('./routes/api/customers');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let app = express();
mongoose.connect('mongodb://localhost/library');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/api/books', books);
app.use('/api/customers', customers);

app.listen(3000, () => console.log('Listening on port 3000..'));
