var nameController = require('./../controllers/names.js')
//----------------routes-----------------------------//
module.exports = function(app){
	app.get('/', nameController.index);
	app.get('/new/:name/', nameController.add);
	app.get('/remove/:name/', nameController.remove);
	app.get('/:name', nameController.info);
}