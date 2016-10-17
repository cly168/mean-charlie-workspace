var quoteController = require('./../controllers/quotes.js')
//--------routes------------------//
module.exports = function(app){
	app.get('/', quoteController.index);
	app.post('/quotes', quoteController.create);
	app.get('/quotes', quoteController.display);
	app.post('/likes/:id', quoteController.like);
}