//placeholder in routing (e.g. for user id)

var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('This is the homepage');
});

app.get('/contact', function(req, res){
	res.send('This is the contact page');
});

app.get('/profile/:id', function(req, res){
	res.send('You requested to see a profile withe the ID of ' + req.params.id);
});


app.listen(3000)