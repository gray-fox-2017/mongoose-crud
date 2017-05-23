const express = require('express');
let app = express();
const books = require('./routes/api/books');
const index = require('./routes/index');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/api/books', books);

app.listen(3000, () => console.log('Listening on port 3000..'));
