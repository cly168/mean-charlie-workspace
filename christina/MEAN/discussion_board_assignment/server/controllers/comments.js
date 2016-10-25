var mongoose = require('mongoose');
var Post = mongoose.model('Post')
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');
var Comment = mongoose.model('Comment');

module.exports = {
	new: function(request, response){
		Post.findOne({_id: request.body._post}, function(err, post){
			var comment = new Comment(request.body);
			comment.save(function(err){
				if(err){
					response.json(err);
				}
				else{
					post.comment.push(comment);
					post.save(function(err){
						if(err){
							response.json(err);
						}
						else{
							response.json(comment);
						}
					})
				}
			})
			if(err){
				response.json(err);
			}
		})
	}
}	