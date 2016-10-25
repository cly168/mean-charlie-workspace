var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;

var PostSchema = new mongoose.Schema({
	post: {
		type: String,
		maxlength: [300, 'Post must be less tahn 300 characters'],
		required: [true, 'Post is required']
	},
	_user: {
		type: ObjectId, 
		ref: 'User'
	},
	_topic: {
		type: ObjectId,
		ref: 'Topic'
	},
	comment: [{type: ObjectId, ref: 'Comment'}]
}, {timestamp: true});

mongoose.model('Post', PostSchema);