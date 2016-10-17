var mongoose = require('mongoose')
	, Dog = mongoose.model('Dog')
	, ObjectId = mongoose.Schema.ObjectId;

module.exports = {
	index: function(request, response){
		Dog.find({}, function(err, dogs){
			var context = {
				list: dogs,
				title: 'Mongoose Dashboard'
			}
			response.render('index', context);
		})
	},
	form: function(request, response){
		response.render('form', {title: 'Add more to Database'})
	},
	add: function(request, response){
		console.log('POST DATA', request.body);
		var dog = new Dog({name: request.body.name, weight: request.body.weight, img: request.body.img});
		dog.save(function(err){
			if(err){
				console.log('something went wrong')
			}
			else{
				console.log('successfully added a dog!');
				response.redirect('/');
			}
		})
	},
	infoOne: function(request, response){
		var id = request.params.id;
		Dog.find({_id: id}, function(err, dogs){
			if(err){
				console.log('something went wrong');
			}
			else{
				console.log('successfully got dog from id')
				var context = {
					single: dogs, 
					title: "Get Dog from ID"
				}
				response.render('id', context);	
			}
		})
	},
	editOne: function(request, response){
		var id = request.params.id;
		Dog.findOne({_id: id}, function(err, dogs){
			if(err){
				console.log('something went wrong');
			}
			else{
				console.log('successfully got dog from id')
				var context = {
					single: dogs, 
					title: "Edit dog by Id"
				}
				response.render('edit', context);	
			}
		})
	},
	updateOne: function(request, response){
		console.log('POST DATA', request.body);
		var id = request.params.id;
		Dog.update({_id: id}, {$set: {name: request.body. name, weight: request.body.weight, img: request.body.img}}, function(err){
			if (err){
				console.log('something went wrong');
			}
			else{
				console.log('successfully edited a dog!');
				response.redirect('/');
			}
		})
	},
	delete: function(request, response){
		console.log('POST DATA', request.body);
		var id = request.params.id;
		Dog.remove({_id: id}, function(err){
			if(err){
				console.log('something went wrong');
			}
			else{
				console.log('successfully removed a dog!')
				response.redirect('/')
			}
		})
	}
}