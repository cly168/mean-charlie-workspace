var model = require('../models/board.js');
var mongoose = require('mongoose')
	, Message = mongoose.model('Message')
	, Comment = mongoose.model('Comment')
	, ObjectId = mongoose.Schema.ObjectId;
//----------------------------------------//
module.exports = function Routes (app){
	app.get('/', function(request, response){
		Message.find({}, null, {sort: "-createdAt"})
			.populate('comment')
			.exec(function(err, messages){
				var context = {
					list: messages,
					title: 'Message Board' 
				}
				response.render('index', context);
			});
	})
	app.post('/message', function(request, response){
		console.log('POST DATA', request.body);
		var message = new Message({name: request.body.name, message: request.body.message})
		message.save(function(err){
			if (err){
				console.log('something went wrong')
			}
			else{
				console.log('successfully added a message!');
				response.redirect('/');
			}
		})
	})
	app.post('/comment/:id', function(request, response){
		console.log('POST DATA', request.body);
		Message.findOne({_id: request.params.id}, function(err, message){
			var comment = new Comment(request.body);
			comment._message = message._id;
			comment.save(function(err){
				message.comment.push(comment);
				message.save(function(err){
					if(err){
						console.log('Error');
					}
					else{
						response.redirect('/');
					}
				});
			})
		})
	})
}