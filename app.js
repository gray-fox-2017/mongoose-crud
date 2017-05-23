const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongodb_crud')
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connection success');
})

app.set('port', process.env.PORT || 3000)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', require('./routes/api'))

app.get('/', (req, res) => {
  res.send('Alive')
})

app.listen(app.get('port'), function(){
  console.log('listening on port '+app.get('port'))
})
