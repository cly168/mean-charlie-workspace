console.log('friends controller');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function FriendController(){
	this.index = function(request, response){
		Friend.find({}, function(err, friends){
			if(err){
				console.log('something went wrong');
				response.json(err);
			}
			else{
				response.json(friends);
			}
		})
	};
	this.create = function(request, response){
		Friend.create(request.body, function(err, friend){
			if(err){
				console.log('failed to create');
				console.log(request.body);
			}
			else{
				console.log('successfully added a friend');
				response.json(friend);
			}
		})
	};
	this.update = function(request, response){
		Friend.findOne({_id: request.params.id}, function(err, friend){
			if(err){
				console.log('something went wrong');
			}
			else{
				friend.first = request.body.first;
				friend.last = request.body.last;
				friend.save(function(err, updatedFriend){
					if(err){
						console.log('something went wrong');
					}
					else{
						console.log('successfully updated a friend');
						response.json(updatedFriend);
					}
				})	
			}
		})
	};
	this.delete = function(request, response){
		Friend.remove({_id: request.params.id}, function(err){
			if(err){
				console.log('failed to delete a friend');
			}
			else{
				response.json({message: 'Friend deleted'});
			}
		})
	};
	this.show = function(request, response){
		Friend.findOne({_id: request.params.id}, function(err, friend){
			if(err){
				console.log('failed to show friend');
			}
			else{
				response.json(friend);
			}
		})
	};
}
module.exports = new FriendController();