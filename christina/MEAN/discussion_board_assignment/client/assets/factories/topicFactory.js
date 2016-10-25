app.factory('topicFactory', ['$http', function($http){
	var myFactory = {};
	myFactory.addTopics = function(topics, callback, errback){
		$http.post('/topics', topics).then(function(topics_json){
			if(topics_json.data.errors){
					errback(topics_json.data.errors);
				}
				else{
					callback(topics_json);
				}
			})
	}
	myFactory.getTopics = function(callback, errback){
		$http.get('/topics').then(function(topics_json){
			if(topics_json.data.errors){
				errback(topics_json.data.errors)
			}
			else{
				callback(topics_json.data)
			}
		})
	}
	myFactory.getCategories = function(callback, errback){
		$http.get('/categories').then(function(categories_json){
			if(categories_json.data.errors){
				errback(categories_json.data.errors)
			}
			else{
				callback(categories_json.data)
			}
		})
	}
	myFactory.showTopics = function(id, callback, errback){
		$http.get('/topics/'+id).then(function(topics_json){
			if(topics_json.data.errors){
				errback(topics_json.data.errors)
			}
			else{
				callback(topics_json.data)
			}
		})
	}
	myFactory.addPosts = function(post, errback){
		$http.post('/posts', post).then(function(posts_json){
			if(posts_json.data.errors){
				errback(posts_json.data.errors)
			}
		})
	}
	myFactory.addComments = function(comment, callback, errback){
		$http.post('/comments', comment).then(function(comment_json){
			if(comment_json.data.errors){
				errback(comment_json.data.errors)
			}
			else{
				callback()
			}
		})
	}
	return myFactory;
}])