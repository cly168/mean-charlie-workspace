var mongoose = require('mongoose')
	, ObjectId = mongoose.Schema.ObjectId;

var DogSchema = new mongoose.Schema({
	name: String, 
	weight: Number,
	img: String
}, {timestamps: true})

mongoose.model('Dog', DogSchema);
var Dog = mongoose.model('Dog')