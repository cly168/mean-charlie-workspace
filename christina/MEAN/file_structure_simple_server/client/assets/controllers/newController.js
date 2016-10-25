app.controller('newController', ['$scope', 'friendsFactory', function($scope, friendsFactory){
	$scope.friends = [];
	$scope.friend = {};
	function get(friends){
		$scope.friends = friends;
		$scope.friend = {};
		console.log($scope.friends);
	}
	$scope.create = function(id){
		friendsFactory.create($scope.friend, get);
	}
	friendsFactory.index(get);
}])