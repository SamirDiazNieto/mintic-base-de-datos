var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const swaggerJSDoc = require('swagger-jsdoc');  
const swaggerUI = require('swagger-ui-express');


 var MongoDBUtil = require('./modules/mongodb/modules/mongodb.module').MongoDBUtil;
 var CustomerController = require('./modules/customer/customer.module')().CustomerController;
 var UsuarioController = require('./modules/usuarios/customer.module')().CustomerController;

var app = express();

//Swagger Configuration  
 const swaggerOptions = {  
   swaggerDefinition: {  
       info: {  
           title:'Customers API',  
           version:'1.0.0'  
       }  
   },  
   apis:['./modules/customer/customer.controller.js'], 
   apis:['./modules/usuarios/customer.controller.js'], 

 }  
 const swaggerDocs = swaggerJSDoc(swaggerOptions);  
 app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
MongoDBUtil.init();
 app.use(cors())
 app.use('/customers', CustomerController);
 app.use('/usuarios', UsuarioController);


app.get('/', function (req, res) {
  var pkg = require(path.join(__dirname, 'package.json'));
  res.json({
      name: pkg.name,
      version: pkg.version,
      status: 'up'
  });
 });
 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: res.locals.message,
    error: res.locals.error
  });
 
});

module.exports = app;
