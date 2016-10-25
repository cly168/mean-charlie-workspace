var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
	index: function(request, response){
		Friend.find({}, function(err, friends){
			if (err){
				console.log('could not go get all friends');
			}
			else{
				response.json(friends)
			}
		})
	},
	create: function(request, response){
		Friend.create(request.body, function(err, friend){
			if(err){
				console.log('failed to create friend');
			}
			else{
				console.log('created a friend')
				response.json(friend);
			}
		})
	},
	show: function(request, response){
		Friend.findOne({_id: request.params.id}, function(err, friend){
			if(err){
				console.log('could not go get friend by id');
			}
			else{
				response.json(friend);
			}
		})
	},
	update: function(request, response){
		Friend.update({_id: request.params.id}, request.body, function(err, friend){
			if(err){
				console.log('could not update friend by id');
			}
			else{
				response.json(friend);
			}
		})
	},
	delete: function(request, response){
		Friend.remove({_id: request.params.id}, function(err, friend){
			if(err){
				console.log('could not delete friend');
			}
			else{
				console.log('successfully deleted friend');
				response.json(friend);
			}
		})
	}
}