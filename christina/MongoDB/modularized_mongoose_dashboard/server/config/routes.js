var dogController = require('./../controllers/dogs.js')
//----------------routes-----------------------------//
module.exports = function(app){
	app.get('/', dogController.index);
	app.get('/new', dogController.form);
	app.post('/dogs', dogController.add);
	app.get('/:id', dogController.infoOne);
	app.get('/:id/edit', dogController.editOne);
	app.post('/:id', dogController.updateOne);
	app.post('/:id/destroy', dogController.delete);
}