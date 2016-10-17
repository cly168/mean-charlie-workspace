var express = require('express'),
	path = require('path'),
	mongoose = require('mongoose'),
	bodyParser = require ('body-parser'),
	app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(bodyParser.json())

app.listen(8000, function(){
	console.log('server running on port 8000');
});