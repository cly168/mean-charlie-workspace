var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports ={
	create: function(request, response){
		User.findOne({name: request.body.name}, function(err, user){
			if(err){
				response.json(err);
			}
			else if(user == null){
				var user = new User(request.body);
				user.save(function(err){
					if(err){
						response.json(err);
					}
					else{
						response.json(user);
					}
				})
			}
			else{
				response.json('User already exists');
			}
		})
	},
	get: function(request, response){
		User.find({}, function(err, user){
			if(err){
				response.json(err)
			}
			else{
				response.json(user);
			}
		})
	},
	delete: function(request, response){
		User.remove({_id: request.params.id}, function(err, user){
			if(err){
				response.json(err);
			}
			else{
				response.json(user);
			}
		})
	}
}