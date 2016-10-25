var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');
var Comment = mongoose.model('Comment');

module.exports = {
	new: function(request, response){
		Topic.findOne({_id: request.body._topic}, function(err, topic){
			var post = new Post(request.body);
			post.save(function(err){
				if(err){
					response.json(err);
				}
				else{
					topic.post.push(post);
					topic.save(function(err){
						if(err){
							response.json(err);
						}
						else{
							response.json(post);
						}
					})
				}
			})
			if(err){
				response.json(err);
			}
		})
	},
}