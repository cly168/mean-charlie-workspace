app.controller('editController', ['$scope', 'friendsFactory', '$routeParams','$location', function($scope, friendsFactory, $routeParams, $location){
	$scope.friends = [];
	$scope.friend = {};
	var id= $routeParams.id
	function getFriend(friends){
		$scope.friends = friends;
		$scope.friend = {};
		$scope.friends.bday = new Date($scope.friends.bday);
	}
	$scope.editFriend = function(id){
		friendsFactory.editFriends($scope.friends, id, getFriend);
		$location.url('/');

	}
	friendsFactory.showFriends(id, getFriend);

		
}])