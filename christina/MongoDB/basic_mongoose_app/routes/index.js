var model = require('../models/users.js');
var mongoose = require('mongoose')
	, User = mongoose.model('User');
//------------------------------------------------//

module.exports = function Routes (app){
	app.get('/',  function(request, response){
		User.find({}, function(err, users){
			var context = {
				list: users,
				title:'Basic Mongoose'
			};
			response.render('index', context);
		})
	})
	app.post('/users', function(request, response){
		console.log("POST DATA", request.body);
		var user = new User({name: request.body.name, age: request.body.age});
		user.save(function(err){
			if (err){
				console.log('something went wrong');
			}
			else{
				console.log('successfully added a user!');
				response.redirect('/')
			}
		})
	})
}