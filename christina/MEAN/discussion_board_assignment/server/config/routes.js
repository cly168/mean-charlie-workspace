var users = require('./../controllers/users.js')
var categories = require('./../controllers/categories.js')
var topics = require('./../controllers/topics.js')
var posts = require('./../controllers/posts.js')
var comments = require('./../controllers/comments.js')
//--------routes------------------//
console.log('routes');

var path = require('path');

module.exports = function(app){
	app.get('/users', users.index);
	// app.get('/users/:id', users.one);
	app.post('/login', users.login);
	app.post('/register', users.register);
	app.get('/categories', categories.get);
	app.post('/topics', topics.new);
	app.get('/topics/:id', topics.show);
	app.post('/posts', posts.new);
	app.post('/comments', comments.new);
	app.get('/topics', topics.get);
	// app.post('/topics/users', topics.)
};