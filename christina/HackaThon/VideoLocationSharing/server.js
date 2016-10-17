
//
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
server.listen(process.env.PORT || 8000);

var time = 0;
var id = '';
var count = 0;

io.sockets.on('connection', function (socket) {
  	socket.on('location', function (data) {
    	io.sockets.emit('location', data);
  	});

  	io.emit('login');
  	count++;
  	socket.on('disconnect', function(){
  		count--;
  		if(count == 0){
  			time=0;
  		}
  	})
	socket.on('passVideo', (data) => {
		id = data.id;
		if (time > data.time) {
			data.time = time;
		} else {
			time = data.time;
		}
		io.sockets.emit('final', (data));
	})

	socket.on('updatereq', () => {
		io.emit('login');
	})
});

// For serving static files inside ./client
app.use(require('express').static(__dirname + '/client'));
