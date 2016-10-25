app.controller('successController', ['$scope', 'usersFactory', '$routeParams', function($scope, usersFactory, $routeParams){
	$scope.users=[];
	$scope.user={};
	var id = $routeParams.id
	function getUser(user){
		$scope.user = user;
	}
	usersFactory.getUser(id, getUser);
}])