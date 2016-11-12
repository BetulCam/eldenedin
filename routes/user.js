


var express = require('express');
var router = express.Router();

var UserController = require('../controllers/UserController');
var userCtrl = new UserController();

router.post('/sing_in', function(req, res) {
  // Login Logic
  UserController().sing_in(req, res);

});

router.post('/sign_up', function(req, res) {
  // Register Logic
  userCtrl.sign_up(req, res);

});

router.get('/me', function(req, res) {
  userCtrl.me(req, res);

});


router.get('/:id', function(req, res) {
  var id = req.params.id;
  userCtrl.detail(id, res);
});


module.exports = router;
