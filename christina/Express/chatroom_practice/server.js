var express = require('express');
var app = express();
app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');

var route = require('./routes/index.js')(app);

var server = app.listen(8000, function(){
	console.log('listening on 8000');
});

var io = require('socket.io').listen(server);

var user_list = [];
io.sockets.on('connection', function(socket){
	console.log(socket.id);
	socket.on('got_a_new_user', function(data){
		user_list.push(data);
		socket.broadcast.emit('new_user', data);
		socket.emit('all_user', {list:user_list})
	})
	socket.on('disconnect', function(data){
		for(var i=0; i<user_list.length; i++){
			if(user_list[i].id == this.id){
				user_list.splice(i, 1);
				break;
			}
		}
		socket.broadcast.emit('remove', {id:this.id});
	})
})