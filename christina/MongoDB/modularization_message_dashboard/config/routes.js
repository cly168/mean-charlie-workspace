var messageController = require('./../controllers/messages.js');
var commentController = require('./../controllers/comments.js');
//--------routes----------------------------------------------//
module.exports = function(app){
	app.get('/', messageController.index);
	app.post('/message', messageController.addMessage);
	app.post('/comment/:id', commentController.addComment);
}