var users = require('./../controllers/users.js')
//--------routes------------------//
console.log('routes');

var path = require('path');

module.exports = function(app){
	app.get('/users', users.index);
	app.get('/users/:id', users.one);
	app.post('/login', users.login);
	app.post('/register', users.register);
	// app.put('/users/:id', users.update);
	// app.delete('/users/:id', users.delete);
};