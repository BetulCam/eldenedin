var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = Schema.Types;
var ObjectId = Schema.ObjectId;


var TagSchema = new Schema({
  name: String,
  description: String
});


module.exports = mongoose.model('Tag', TagSchema);
