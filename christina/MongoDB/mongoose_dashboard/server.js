var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
var path = require('path');
app.set('view engine', 'ejs');
//--------------------------------------------//
var model = require('./models/dogs.js');
var mongoose = require('mongoose')
	, Dog = mongoose.model('Dog');
//-------------------------------------------//
mongoose.connect('mongodb://localhost/mongoose_dashboard');
//---------------------------------------------//
var routes = require('./routes/index.js')(app);

app.listen(8000, function(){
	console.log('listening on 8000')
})