var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var todoItem = require("./database.js")
var mongoose = require("mongoose");
mongoose.connect('mongodb://checklist:checklist@ds035583.mlab.com:35583/heroku_f51m8qvf');

var app = express();

var port = process.env.PORT || 8080;

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

    res.send("posted");
});

app.get("/todos", function(req, res){
    todoItem.find({}, function(err, docs){
        if(err){
            throw err;
        }
        res.send(docs);
    });
});

app.listen(port, function() {
  console.log('app is listening on port ' + port);
});