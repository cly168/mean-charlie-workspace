var mongoose = require('mongoose');
var Message = mongoose.model('message');
var Comment = mongoose.model('comment');

module.exports = {
	index: function(request, response){
		var messages = Message.find({}, null, {sort: "-createdAt"})
			.populate('comment')
			.exec(function(err, messages){
				if (err){
					response.json(err);
					console.log('something went wrong')
				}
				else{
					console.log('successfully populated comments!');
					var context = {
						list: messages,
						title: 'Message Board' 
					}
					response.render('index', context);
				}	
			});
	},
	addMessage: function(request, response){
		var message = new Message({name: request.body.name, message: request.body.message})
		message.save(function(err, messages){
			if (err){
				response.json(err);
				console.log('something went wrong')
			}
			else{
				console.log('successfully added a message!');
				response.redirect('/');
			}
		})
	}
}