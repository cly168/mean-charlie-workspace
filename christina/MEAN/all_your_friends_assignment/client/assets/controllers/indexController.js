app.controller('indexController', ['$scope', 'friendsFactory', function($scope, friendsFactory){
	$scope.friends = [];
	$scope.friend = {};
	function getFriend(friends){
		$scope.friends = friends;
		$scope.friend = {};
	}
	friendsFactory.getFriends(getFriend);
}])