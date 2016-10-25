var mongoose = require('mongoose');
var Category = mongoose.model('Category');

module.exports = {
	get: function(request, response){
		Category.find({}, function(err, category){
			if(err){
				response.json(err);
			}
			else{
				response.json(category)
			}
		})
	},
}