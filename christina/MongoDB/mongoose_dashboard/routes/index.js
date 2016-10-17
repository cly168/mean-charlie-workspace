var model = require('../models/dogs.js');
var mongoose = require('mongoose')
	, Dog = mongoose.model('Dog')
	, ObjectId = mongoose.Schema.ObjectId;
//------------------------------//
module.exports = function Routes(app){
	app.get('/', function(request, response){
		Dog.find({}, function(err, dogs){
			var context = {
				list: dogs,
				title: 'Display all'
			};
			response.render('index', context);
		})
	})
	app.get('/new', function(request, response){
		response.render('form', {title: 'Add more to Database'})
	})
	app.post('/dogs', function(request, response){
		console.log('POST DATA', request.body);
		var dog = new Dog({name: request.body.name, weight: request.body.weight, img: request.body.img});
		dog.save(function(err){
			if (err){
				console.log('something went wrong');
			}
			else{
				console.log('successfully added a dog!');
				response.redirect('/');
			}
		})
	})
	app.get('/:id', function(request, response){
		var id = request.params.id;
		Dog.find({_id: id}, function(err, dogs){
			var context = {
				list: dogs, 
				title: "Dog from ID"
			};
			response.render('id', context);
		})
	})
	app.get('/:id/edit', function(request, response){
		var id = request.params.id;
		Dog.findOne({_id: id}, function(err, dogs){
			var context = {
				single: dogs,
				title: "Edit Dog By Id"
			};
			response.render('edit', context);
		})
	})
	app.post('/:id', function(request, response){
		console.log('POST DATA', request.body);
		var id = request.params.id;
		Dog.update({_id: id}, {$set: {name: request.body.name, weight: request.body.weight, img: request.body.img}}, function(err){
			if (err){
				console.log('something went wrong');
			}
			else{
				console.log('successfully edited a dog!');
				response.redirect('/');
			}
		});
	})
	app.post('/:id/destroy', function(request, response){
		console.log('POST DATA', request.body);
		var id = request.params.id;
		Dog.remove({_id: id}, function(err){
			if (err){
				console.log('something went wrong');
			}
			else{
				console.log('successfully removed a dog!');
				response.redirect('/');
			}
		})
	})		
}
