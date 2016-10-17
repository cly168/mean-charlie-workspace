var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('view engine', 'ejs');
//-----------------------------------------------//
var model = require('./models/users.js');
var mongoose = require('mongoose')
	, User = mongoose.model('User');
//------------------------------------------------//
mongoose.connect('mongodb://localhost/basic_mongoose');
//---------------------------------------------------------//

var routes = require("./routes/index.js")(app);

app.listen(8000, function(){
	console.log('listening on 8000');
});