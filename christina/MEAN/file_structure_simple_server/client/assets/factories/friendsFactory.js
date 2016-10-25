console.log('Friends Factory')
app.factory('friendsFactory', ['$http',function($http){
	var friends = [];
	var myFactory = {};
	function friendsFactory(){
		var _this = this;
		this.create = function(newfriend, callback){
			$http.post('/friends', newfriend).then(function(returned_data){
				console.log(returned_data.data);
				if(typeof(callback)==='function'){
					callback(returned_data.data);
				}
			});
		};
		this.update = function(updatefriend, id, callback){
			if(friends[id]){
				for(var key in updatefriend){
					friends[id][key] = updatefriend[key];
				}
			}
			if(typeof(callback)==='function'){
				callback(friends[id]);
			}
		}
		this.index = function(callback){
			$http.get('/friends').then(function(returned_data){
				console.log(returned_data.data);
				friends = returned_data.data;
				callback(friends);
			});
		}
		this.delete = function(id, callback){
			if(friends[id]){
				friends.splice(id, 1);
			};
			if(typeof(callback) === 'function'){
				callback(friends);
			}
		}
		this.show = function(id, callback){
			if(typeof(callback) === 'function'){
				callback(friends[id]);
			}
		}
	}
	return new friendsFactory();
}]);
