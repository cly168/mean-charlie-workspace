app.controller('showController', ['$scope', 'friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams){
	$scope.friends = [];
	$scope.friend = {};
	var id= $routeParams.id
	function getFriend(friends){
		$scope.friends = friends;
		$scope.friend = {};
	}
	friendsFactory.showFriends(id, getFriend);	
}])