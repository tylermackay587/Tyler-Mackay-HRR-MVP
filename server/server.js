var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");

var app = express();

 app.use(express.static(path.resolve("client")));
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.resolve('client/index.html'));
});

app.post('/todos', function(req, res) {
	console.log(req.body.content);
	console.log(req.body.priority);
});

app.listen(3000, function() {
  console.log('app is listening on port 3000');
});