var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
var path = require('path');
app.set('view engine', 'ejs');
//------------views-----------------------------//
app.set('views', path.join(__dirname, './client/views'))
//-------------model/mongoose-------------------------//
require('./server/config/mongoose.js');
//-------------controller/routes--------------------------//
require('./server/config/routes.js')(app);

app.listen(8000, function(){
	console.log('listening on 8000')
})