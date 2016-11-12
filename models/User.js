
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var placeholder_url = "";
// Gender
// { Female: 0, Male: 1}

var UserSchema = new Schema({
  first_name: String,
  last_name: String,
  password: String,
  gender: Number,
  email: { type: String, index: { unique: true }},
  photo_url: { type: String, default: placeholder_url },
  information: String,
  selling_products: [ { type: ObjectId, ref: 'ProductSchema', required: false }],
  buying_products: [ { type: ObjectId, ref: 'ProductSchema', required: false }]
});


module.exports = mongoose.model('User', UserSchema);
