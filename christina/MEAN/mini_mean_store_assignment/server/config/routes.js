var users = require('./../controllers/users.js')
var products = require('./../controllers/products.js')
var orders = require('./../controllers/orders.js')

var path = require('path');

module.exports = function(app){
	app.post('/users', users.create);
	app.post('/products', products.create);
	app.post('/orders', orders.create);
	app.get('/orders', orders.get);
	app.get('/products', products.get);
	app.get('/users', users.get);
	app.delete('/users/:id/delete', users.delete);
	app.get('/products/:id/show', products.show);
};