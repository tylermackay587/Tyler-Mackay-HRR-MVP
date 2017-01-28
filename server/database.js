var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var todo = new Schema({
	content: String,
	priority: String,
    id: Number
});

var todoItem = mongoose.model("todoItem", todo);
module.exports = todoItem;