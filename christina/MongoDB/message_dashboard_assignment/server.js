var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
var path = require('path');
app.set('view engine', 'ejs');
//-------------------------------------------------//
var model = require('./models/board.js');
var mongoose = require('mongoose')
	, Message = mongoose.model('Message');
//-------------------------------------------------//
mongoose.connect('mongodb://localhost/message_board');
//----------------------------------------------------//
var routes = require('./routes/index.js')(app);

app.listen(8000, function(){
	console.log('listening on 8000')
})