const mongoose = require('mongoose');
mongoose.connect('monggodb://localhost:3000/library');
const Schema = mongoose.Schema;
let customerSchema = new Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
});

//tarEdit
// customerSchema.statics.genMemberID = (cb) => {
//
// }

let Customer = mongoose.model('Customer',customerSchema);
module.exports = Customer