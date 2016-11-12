
//MODEL
var UserModel = require('../models/User');


// INIT
function BaseController() {}


BaseController.prototype.send = function(data) {
  var response = new Object();
  response.data = data;
  response.meta = new Object();
  response.meta.is_array = Array.isArray(data);
  this.response = response;

  return response;
}

BaseController.prototype.user_detail = function(user_id, callback) {
  /// user_id
  UserModel.find({_id: user_id}, function(users, err) {
    console.log("user_id: " + user_id + " users: " + users + "first user" + users[0]);

    if (err) {
      callback(err, null);
    }else {
      var data = users[0];
      callback(null, data);
    }
  });
};


module.exports = BaseController;
