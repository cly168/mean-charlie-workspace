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
var message_list = [];
io.sockets.on('connection', function(socket){
	console.log(socket.id);

//----------------------------new users----------------------------//
	socket.on('got_a_new_user', function(data){
		user_list.push(data);
		socket.emit('old_message', {list:message_list});
	})

//------------------------------old users--------------------------//
	socket.on('send_message', function(data){
		var name = '';
		for(var i =0; i<user_list.length; i++){
			if(user_list[i].id == this.id){
				name = user_list[i].name;
				break;
			}
		}
		message_list.push({name:name, message:data.message})
		io.emit('display_message', {name: name, message: data.message})
	})
})