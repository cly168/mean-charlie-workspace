var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
var path = require('path');
app.set('view engine', 'ejs');
//----------model/mongoose--------------------------//
require('./config/mongoose_setup.js')
//------------controller/routes---------------------------//
require('./config/routes.js')(app);

app.listen(8000, function(){
	console.log('listening on 8000')
})