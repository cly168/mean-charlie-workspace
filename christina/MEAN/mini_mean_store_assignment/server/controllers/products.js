var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
	create: function(request, response){
		Product.create(request.body, function(err, product){
			if(err){
				response.json(err);
			}
			else{
				response.json(product)
			}
		})
	},
	get: function(request, response){
		Product.find({}, function(err, product){
			if(err){
				response.json(err);
			}
			else{
				response.json(product)
			}
		})
	},
	show: function(request, response){
		Product.findOne({_id: request.params.id}, function(err, product){
			
		})
	}
}
