var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser= require('body-parser');
const pe  = require('parse-error');
const cors  = require('cors');
const CONFIG = require('./config/config');

var app = require('express')();
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});
module.exports = app;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


var indexRouter = require('./routes/index');
var registerRouter=require('./router/register');
var addRouter=require('./router/register');
var currencyRouter=require('./router/general/:id');
var generalRouter=require('./router/general');
var chatRouter=require('./router/chat');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
var handlebars=require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/register',registerRouter);
app.use('/general/:id',currencyRouter);
app.use('/general',generalRouter);
app.use('/chat',chatRouter);

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
  res.render('error');
});



