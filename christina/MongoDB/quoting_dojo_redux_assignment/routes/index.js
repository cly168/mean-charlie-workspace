var model = require('../models/quotes.js');
var mongoose = require('mongoose')
	, Quote = mongoose.model('Quote')
	, ObjectId = mongoose.Schema.ObjectId;
//-------------------------------------------//
module.exports = function Routes(app){
	app.get('/', function(request, response){
		response.render('index', {title: 'QuotingDojo'})
	})
	app.post('/quotes', function(request, response){
		console.log('POST DATA', request.body);
		var quote = new Quote({name: request.body.name, quote: request.body.quote, likes: 0})
		quote.save(function(err){
			if (err){
				response.render('error', {err: err});
			}
			else{
				console.log('successfully added a quote!');
				response.redirect('/quotes');
			}
		})
	})
	app.get('/quotes', function(request, response){
		Quote.find({}, null, {sort: "-likes"}, function(err, quotes){
			var context = {
				list: quotes,
				title: 'All Quotes'
			};
			response.render('quotes', context);
		})
	})
	app.post('/likes/:id', function(request, response){
		console.log('POST DATA', request.body);
		var id = request.params.id;
		var quote = Quote.findOne({_id: id}, function(err, quotes){
			var likes = quotes.likes;
			likes++;
			Quote.update({_id: id}, {$set: {likes: likes}}, function(err){
			if (err){
				console.log('something went wrong');
			}
			else{
				console.log('successfully liked the quote!');
				response.redirect('/quotes');
			}
			});
		})
	})
}