var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request,response){
	response.render('index', {title:"my Express project"});
});
app.post('/new', function(request, response){
	console.log('POST DATA \n\n', request.body)
	response.redirect('/');
})
app.get('/users', function(request,response){
	var users_array = [
		{name: "Michael", email: "michael@codingdojo.com"},
		{name: "Jay", email: "jay@codingdojo.com"},
		{name: "Brendan", email: "brendan@codingdojo.com"},
		{name: "Andrew", email: "andrew@codingdojo.com"}
	];
	response.render('users', {users:users_array});
})
app.get("/users/:id", function (request, response){
	console.log("the user id requested is:", request.params.id);
	response.send("You requested the user with id:" +request.params.id);
})
app.listen(8000, function() {
	console.log('listening on 8000');
})