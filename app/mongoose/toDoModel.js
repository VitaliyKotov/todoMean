var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var toDoSchema = new Schema({
  	title: { type: String, reqiured: true },
  	comment: String,
  	deadline: { type: Date, default: undefined},
  	done: { type: Boolean, default: false },
});

var toDo = mongoose.model('toDo', toDoSchema);

module.exports = toDo;