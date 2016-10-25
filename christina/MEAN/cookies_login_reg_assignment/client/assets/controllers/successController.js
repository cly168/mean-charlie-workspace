app.controller('successController', ['$scope', 'usersFactory', '$routeParams', '$cookies', function($scope, usersFactory, $routeParams, $cookies){
	$scope.users=[];
	$scope.user={};
	$scope.user = $cookies.user
	// var id = $routeParams.id
	// function getUser(user){
	// 	$scope.user = user;
	// }
	// usersFactory.getUser(id, getUser);
}])