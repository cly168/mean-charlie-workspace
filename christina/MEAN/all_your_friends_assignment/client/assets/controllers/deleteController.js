app.controller('deleteController', ['$scope', 'friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams){
	$scope.friends = [];
	$scope.friend = {};
	var id= $routeParams.id
	function getFriend(friends){
		$scope.friends = friends;
		$scope.friend = {};
	}
	friendsFactory.deleteFriends(id, getFriend);
	friendsFactory.getFriends(getFriend);
}])