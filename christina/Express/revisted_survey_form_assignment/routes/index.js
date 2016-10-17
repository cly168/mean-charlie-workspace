module.exports = function Routes(app){
	app.get('/', function(request, response){
		response.render('index', {title:'survey form'});
	});
}
