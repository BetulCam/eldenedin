
var mongoose = require('mongoose');
require('mongoose-double')(mongoose);

var Schema = mongoose.Schema;
var SchemaTypes = Schema.Types;
var ObjectId = Schema.ObjectId;

// State
// { private: 0, selling: 1, sold: 2 },

var ProductSchema = new Schema({
  title: String,
  price: SchemaTypes.Double,
  description: String,
  tags: [ { type: ObjectId, ref: 'TagSchema', required: false }],
  state: Number,
  owner: { type: ObjectId, ref: 'UserSchema', required: false }
});

module.exports = mongoose.model('Product', ProductSchema);
