var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var todoItem = require("./database.js")
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/mvp');

var app = express();

 app.use(express.static(path.resolve("client")));
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.resolve('client/index.html'));
});

app.post('/todos', function(req, res) {
	var newItem = todoItem({
		content: req.body.content,
		priority: req.body.priority
	});
	newItem.save(function(err) {
  		if(err) {
  		  throw err;
  		}
    });
});

app.get("/todos", function(req, res){
    todoItem.find({}, function(err, docs){
        if(err){
            throw err;
        }
        res.send(docs);
    });
});

app.listen(3000, function() {
  console.log('app is listening on port 3000');
});