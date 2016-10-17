var http = require('http');
var fs = require('fs');
var static_contents = require('./static.js');

server = http.createServer(function (request, response){
	static_contents(request, response);
});
server.listen(80);
console.log("Running in localhost at port 8000");