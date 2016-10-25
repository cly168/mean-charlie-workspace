var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;

var ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Product name is required']
	},
	quantity: {
		type: Number, min: 1, max: 500,
		required: [true, 'Product quantity is required']
	},
	img: {
		type: String,
		required: [true, 'Product image is required']
	},
	des: {
		type: String,
		required: [true, 'Product description is required']
	}
}, {timestamp: true});

mongoose.model('Product', ProductSchema);