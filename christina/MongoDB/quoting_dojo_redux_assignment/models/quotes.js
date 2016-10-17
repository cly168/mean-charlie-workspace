var mongoose = require('mongoose')
	, ObjectId = mongoose.Schema.ObjectId;

var QuoteSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 2},
	quote: {type: String, required: true, minlength: 2},
	likes: {type: Number, min: 0, max: 1000},
}, {timestamps: true})

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')