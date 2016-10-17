var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');

var route = require('./routes/index.js')(app);

var server = app.listen(8000, function(){
	console.log('listening on 8000');
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	console.log(socket.id);
	socket.on('form_submit', function(data){
		console.log(data);
		socket.emit('form_result', data);
		socket.emit('random_number', {number:Math.ceil(Math.random()*1000)})
	})
})