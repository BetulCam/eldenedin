



// Controllers
var BaseController = require('./BaseController');


// models
var ProductModel = require('../models/Product');


// Inheritance
// Kalitim
ProductController.prototype = new BaseController();
ProductController.constructor = ProductController;

// INIT method
// Kurucu method
function ProductController() {
  BaseController.call(this);
}

ProductController.prototype.create = function(req, res) {

};

ProductController.prototype.delete = function(req, res) {
  var id = req.body.id;
  console.log("body product_id is" + id + "");

};


ProductController.prototype.detail = function(product_id, res) {

  var self = this;
  ProductModel.find({ _id: product_id }, function(products, err) {

    console.log("product_id: " + product_id + " products: " + products + "first user" + products[0]);

    if (err) {

    }else {
      var product = products[0];
      res.send(self.send(product));
    }
  })
};

module.exports = ProductController;
