var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var currencyRouter = require('./routes/currencyRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/rates', currencyRouter);

app.use("*", (req, res, next)=>{
  res.redirect("/api/rates");
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log("app running on port: "+PORT)
})

module.exports = app;