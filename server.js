"use strict";

var express = require('express');
var path = require('path');
var cons = require('consolidate');


var app = express();

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

//app.set('views', path.join(__dirname, 'views'));
//app.engine('.html', require('jade'));

var staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

app.get('/', function(req, res){
	res.render('index');
});

app.get('/musician', function(req, res){
	res.render('musician');
});

app.get('/dev', function(req, res){
	res.render('dev');
});

app.listen(3000, function() {
  console.log('listening');
});