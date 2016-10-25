var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = {
	create: function(request, response){
		Product.findOne({_id: request.body._product}, function(err, product){
			if(err){
				response.json(err);
			}
			else if(product.quantity > request.body.quantity){
				var order = new Order(request.body);
				order.save(function(err){
					if(err){
						response.json(err);
					}
					else{
						product.quantity -= order.quantity;
						product.save(function(err){
							if(err){
								response.json(err);
							}
						})
						response.json(order);
					}
				})
			}
		})
	},
	get: function(request, response){
		Order.find({})
		.populate('_user')
		.populate('_product')
		.exec(function(err, order){
			if(err){
				response.json(err);
			}
			else{
				response.json(order)
			}
		})
	},
}