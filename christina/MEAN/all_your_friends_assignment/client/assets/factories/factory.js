app.factory('friendsFactory',['$http', function($http){
	var friends = [];
	var myFactory = {};
	myFactory.getFriends = function(callback){
		$http.get('/friends').then(function(friends_json){
			friends = friends_json.data;
			callback(friends);
		});
	}
	myFactory.createFriends = function(friend, callback){
		$http.post('/friends', friend).then(function(friends_json){
			friends.push(friends_json.data);
			callback(friends);
		});	
	}
	myFactory.showFriends = function(id, callback){
		$http.get('/friends/'+id).then(function(friends_json){
			callback(friends_json.data);
		});
	}
	myFactory.editFriends = function(friend, id, callback){
		$http.put('/friends/'+id, friend).then(function(friends_json){
			callback(friends_json.data);
		});
	}
	myFactory.deleteFriends = function(id, callback){
		$http.delete('/friends/'+id).then(function(friends_json){
			callback(friends_json);
		})
	}
	return myFactory;
}])