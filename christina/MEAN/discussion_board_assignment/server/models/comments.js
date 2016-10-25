var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;

var CommentSchema = new mongoose.Schema({
	comment: {
		type: String,
		maxlength: [100, 'Comments must be less than 100 characters'],
		required: [true, 'Must require a comment']
	},
	_user: {
		type: ObjectId,
		ref: 'User',
		required: [true, 'User is not added']
	},
	_post: {
		type: ObjectId, 
		ref: 'Post'
	}
}, {timestamp: true});

mongoose.model('Comment', CommentSchema);