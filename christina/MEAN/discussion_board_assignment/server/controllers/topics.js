var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var Post = mongoose.model('Post');
var User = mongoose.model('User');
var Comment = mongoose.model('Comment');

module.exports = {
	new: function(request, response){
		Topic.create(request.body, function(err, topic){
			if(err){
				response.json(err);
			}
			else{
				response.json(topic);
			}
		})
	},
	show: function(request, response){
		Topic.findOne({_id: request.params.id})
		.populate('_user')
		.populate('_category')
		.populate({
				path: 'post', 
				model: 'Post', 
				populate: {
					path: 'comment', 
					model: 'Comment'
			 	}, 
			 	populate:{
			 		path: '_user', 
			 		model: 'User'
			 	}
			 })
		.populate({
				path: 'post', 
				model: 'Post', 
				populate: {
					path: 'comment', 
					model: 'Comment', 
					populate: {
						path: '_user', 
						model: 'User'
					}
			 	}
			 })
		.exec(function(err, topic){
			if(err){
				response.json(err);
			}
			else{
				response.json(topic);
			}
		})
	},
	get: function(request, response){
		Topic.find({})
		.populate('_user')
		.populate('_category')
		.populate({
				path: 'post', 
				model: 'Post', 
				populate: {
					path: 'comment', 
					model: 'Comment'
			 	}, 
			 	populate:{
			 		path: '_user', 
			 		model: 'User'
			 	}
			 })
		.populate({
				path: 'post', 
				model: 'Post', 
				populate: {
					path: 'comment', 
					model: 'Comment', 
					populate: {
						path: '_user', 
						model: 'User'
					}
			 	}
			 })
		.exec(function(err, topic){
			if(err){
				response.json(err);
			}
			else{
				response.json(topic);
			}
		})
	}
}