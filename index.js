var path = require('path');
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var http = require('http');


// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
	res.redirect('index.html');
});
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000, function (){
	console.log('Listening on port 3000');
});
