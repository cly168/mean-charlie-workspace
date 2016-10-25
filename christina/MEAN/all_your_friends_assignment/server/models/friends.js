var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;

var FriendSchema = new mongoose.Schema({
	first: {type: String, required: true, minlength: 2},
	last: {type: String, required: true, minlength: 2},
	bday: {type: Date, required: true}
}, {timestamps: true})

mongoose.model('Friend', FriendSchema);