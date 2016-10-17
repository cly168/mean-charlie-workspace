var mongoose = require('mongoose')
  , ObjectId = mongoose.Schema.ObjectId;

var UserSchema = new mongoose.Schema({
	name: {type: String},
	age: {type: Number}
}, {timestamps: true})

mongoose.model('User', UserSchema);
var User = mongoose.model('User')
