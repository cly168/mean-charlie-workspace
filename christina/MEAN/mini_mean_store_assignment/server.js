var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require ('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
	console.log('listening on 8000')
})