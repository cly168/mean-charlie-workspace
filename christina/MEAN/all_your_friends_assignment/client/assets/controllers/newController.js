app.controller('newController', ['$scope', 'friendsFactory', '$location', function($scope, friendsFactory, $location){
	$scope.friends = [];
	$scope.friend = {};
	function getFriend(friends){
		$scope.friends = friends;
		$scope.friend = {};
	}
	$scope.createFriend = function(){
		friendsFactory.createFriends($scope.friend, getFriend)
		$location.url('/');
	}
}])