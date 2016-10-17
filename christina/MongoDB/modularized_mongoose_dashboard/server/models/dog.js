var mongoose = require('mongoose')
	, ObjectId = mongoose.Schema.ObjectId;

var DogSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 2},
	weight: {type: Number, required: true, min: 0 , max: 1000},
	img: {type: String, required: true, minlength: 2}
}, {timestamps: true})

mongoose.model('Dog', DogSchema);