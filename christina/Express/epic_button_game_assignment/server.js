var express = require('express');
var app = express();
app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');

var route = require('./routes/index.js')(app);

var server = app.listen(8000, function(){
	console.log('listening on 8000');
});

var io = require('socket.io').listen(server);

var count = 0;
io.sockets.on('connection', function(socket){
	console.log(socket.id);
	io.emit('count', {count: count});
	socket.on('button_pushed', function(){
		io.emit('count', {count: count++});
	})
})