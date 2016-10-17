module.exports = function Route(app){
	app.get('/', function(request, response){
		response.render('index', {title:'survey form'});
	});
	app.post('/result', function(request,response){
		response.render('results', {data:request.body});
	});
}