


var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send({ data: "Hello world", meta: { is_array: false, is_error: false, type: "Error" }});
});

router.get('/coffee', function(req, res) {
  res.send({ data: {
    coffee: "Americano",
    id: 0
  }, meta: { type: "Coffee", is_error: false, is_array: false }});
})

module.exports = router;
