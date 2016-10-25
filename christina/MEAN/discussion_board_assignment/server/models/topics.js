var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;

var TopicSchema = new mongoose.Schema({
	question: {
		type: String,
		maxlength: [100, 'Question must be less than 32 characters'],
		required: [true, 'Must require a Topic header']
	},
	desc: {
		type: String, 
		maxlength: [1000, 'Description of question must be less than 100 characters'],
		required: [true, 'Must require a description']
	},
	_user: {
		type: ObjectId, 
		ref: 'User'
	},
	_category: {
		type: ObjectId,
		ref: 'Category',
		required: [true, 'Category is required']
	},
	post: [{type: ObjectId, ref: 'Post'}],
}, {timestamp: true});

mongoose.model('Topic', TopicSchema);