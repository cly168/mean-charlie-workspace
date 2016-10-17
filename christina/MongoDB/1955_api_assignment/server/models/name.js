var mongoose = require('mongoose')
	, ObjectId = mongoose.Schema.ObjectId;

var NameSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 2}
}, {timestamps: true})

mongoose.model('Name', NameSchema);