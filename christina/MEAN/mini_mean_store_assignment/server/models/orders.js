var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;

var OrderSchema = new mongoose.Schema({
	quantity: {
		type: Number, min: 1, max: 500,
		required: [true, 'Order quantity is required']
	},
	_user: {
		type: ObjectId,
		ref: 'User'
	},
	_product: {
		type: ObjectId,
		ref: 'Product'
	}

}, {timestamp: true});

mongoose.model('Order', OrderSchema);