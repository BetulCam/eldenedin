


var express = require('express');
var router = express.Router();

// Controllers
var ProductController = require('../controllers/ProductController');


router.post('/create', function(req, res) {
  ProductController().create(req, res);
});

router.get('/:id', function(req, res) {
  var id = req.params.id;
  console.log("get product_id is " + id + "");
  ProductController().detail(id, res);
  
})


module.exports = router;
