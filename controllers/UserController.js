

// Controllers
var BaseController = require('./BaseController');

// MODELS
var UserModel = require('../models/User');

var MD5 = require('MD5');

// Inheritance
// Kalitim
UserController.prototype = new BaseController();
UserController.constructor = UserController;

// INIT method
// Kurucu method
function UserController() {
  BaseController.call(this);
}

UserController.prototype.sign_up = function(req, res) {
  var user = req.body.user;
  /*
  {
  first_name
  last_name
  email
  password
  Gender 0female 1male

}
  */
  var model = new UserModel();
  model.first_name = user.first_name;
  model.last_name = user.last_name;
  model.email = user.email;
  model.password = MD5(user.password);
  model.gender = user.gender;

  var self = this;

  model.save(function(err) {
    if (err) {
      err.type = "Error";
      res.send(self.send(err))
    }else {
      model.type = "User";
      res.send(self.send(model))
    }
  })
};

UserController.prototype.sing_in = function(req, res) {
  //
  var user = req.body.user;
  var hash_password = MD5(user.password);

  UserModel.find({ email: user.email, password: hash_password }, function(users, err) {
    if (err) {
      err.type = "Error";
      res.send(self.send(err))
    }else {
      var data = users[0];
      data.type = "User";
      res.send(self.send(data))
    }

  })
};


UserController.prototype.me = function(req, res) {
  var user_id = req.body.user_id;
  this.detail(user_id, res);
};


UserController.prototype.detail = function(user_id, res) {

    this.user_detail(user_id, function(err, data) {
      if (err) {
        res.send(this.send(err))
      }else {
        res.send(this.send(data))
      }
    })
};


module.exports = UserController;
