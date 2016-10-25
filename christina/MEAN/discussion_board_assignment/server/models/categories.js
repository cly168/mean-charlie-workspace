var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;

var CategorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Category is required']
	}
}, {timestamp: true});

mongoose.model('Category', CategorySchema);