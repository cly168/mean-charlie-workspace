var mongoose = require('mongoose');
var Message = mongoose.model('message');
var Comment = mongoose.model('comment');

module.exports = {
	addComment: function(request, response){
		console.log('POST DATA', request.body);
		 var messages = Message.findOne({_id: request.params.id}, function(err, message){
			var comment = new Comment(request.body);
			comment._message = message._id;
			comment.save(function(err){
				message.comment.push(comment);
				message.save(function(err){
					if(err){
						response.json(err);
						console.log('Error');
					}
					else{
						response.redirect('/');
					}
				})
			})
		})
	}
}