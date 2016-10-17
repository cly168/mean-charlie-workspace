var mongoose = require('mongoose')
	, ObjectId = mongoose.Schema.ObjectId;

var MessageSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	message: {type: String, required: true, minlength: 2},
	comment: [{type: ObjectId, ref: 'Comment'}]
}, {timestamps: true}); 

var CommentSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength:4},
	_message: {type: ObjectId, ref: 'Post'},
	comment: {type: String, required: true, minlength: 2}
}, {timestamps: true});

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');