var mongoose = require('mongoose')
	, ObjectId = mongoose.Schema.ObjectId;

var MessageSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	message: {type: String, required: true, minlength: 2},
	comment: [{type: ObjectId, ref: 'comment'}]
}, {timestamps: true}); 

mongoose.model('message', MessageSchema);