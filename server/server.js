var express = require('express');
var path = require('path');
var morgan = require("morgan");

var app = express();
app.use(morgan("dev"))

 app.use(express.static(path.resolve("client")));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('client/index.html'));
  //res.send("hello");
});

app.listen(3000, function() {
  console.log('app is listening on port 3000');
});