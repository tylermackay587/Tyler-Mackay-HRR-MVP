var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mvp');

var Schema = mongoose.Schema;
var todo = new Schema({
	content: String,
	priority: String
});

var todoItem = mongoose.model("todoItem", todo);
module.exports = todoItem;