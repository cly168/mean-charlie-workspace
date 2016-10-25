var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required'],
		trim: true,
	}
}, {timestamp: true});

mongoose.model('User', UserSchema);