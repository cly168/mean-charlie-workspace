var mongoose = require('mongoose')
	, ObjectId = mongoose.Schema.ObjectId;

var CommentSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength:4},
	_message: {type: ObjectId, ref: 'Message'},
	comment: {type: String, required: true, minlength: 2}
}, {timestamps: true});

mongoose.model('comment', CommentSchema);
