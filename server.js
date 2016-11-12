

// set up ========================
   var express = require('express');
   var path = require('path');
   var favicon = require('serve-favicon');
   var logger = require('morgan');
   var cookieParser = require('cookie-parser');
   var bodyParser = require('body-parser');
   var mongoose = require('mongoose');

   var app      = express();                               // create our app w/ express

   var route = require('./routes/index');
   var user = require('./routes/user');
   var product = require('./routes/product');
   var tag = require('./routes/tag');


   mongoose.connect('mongodb://127.0.0.1:27017/eldenedin_app'); // connect to our database

   app.use(logger('dev'));
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(cookieParser());
   app.use(express.static(path.join(__dirname, 'public')));


   app.use('/api', route);
   app.use('/api/user', user);
   app.use('/api/product', product);
   app.use('/api/tag', tag);



   // catch 404 and forward to error handler
   app.use(function(req, res, next) {
     var err = new Error('Not Found');
     err.status = 404;
     next(err);
   });

   // error handlers

   // development error handler
   // will print stacktrace
   if (app.get('env') === 'development') {
     app.use(function(err, req, res, next) {
       res.status(err.status || 500);
       res.send({
         message: err.message,
         error: err
       });
     });
   }

   // production error handler
   // no stacktraces leaked to user
   app.use(function(err, req, res, next) {
     res.status(err.status || 500);
     res.send({
       message: err.message,
       error: {}
     });
   });


   // listen (start app with node server.js) ======================================
   app.listen(8080);
   console.log("App listening on port 8080");
