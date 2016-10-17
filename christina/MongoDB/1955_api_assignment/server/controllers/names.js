var mongoose = require('mongoose')
	, Name = mongoose.model('Name')
	, ObjectId = mongoose.Schema.ObjectId;

module.exports = {
	index: function(request, response){
		Name.find({}, function(err, names){
			if(err){
				response.json(err);
			}
			else{
				response.json(names);
			}
		});
	},
	add: function(request, response){
		var name = request.params.name;
		name = new Name({name: name});
		name.save(function(err){
			if(err){
				response.json(err);
			}
			else{
				response.redirect('/');
			}
		});
	},
	remove: function(request, response){
		var name = request.params.name;
		Name.remove({name: name}, function(err){
			if(err){
				response.json(err);
			}
			else{
				response.redirect('/');
			}
		});
	},
	info: function(request, response){
		var name = request.params.name;
		Name.find({name: name}, function(err, names){
			if(err){
				response.json(err);
			}
			else{
				response.json(names);
			}
		});
	}
}