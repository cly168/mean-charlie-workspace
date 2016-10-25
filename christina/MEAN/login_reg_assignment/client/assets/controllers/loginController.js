app.controller('loginController', ['$scope', 'usersFactory', '$location', function($scope, usersFactory, $location){
	$scope.users=[];
	$scope.user={};
	$scope.message = '';
	console.log('here')
	function success(users){
		$scope.users = users;
		$scope.user = {};
	}
	function getUser(user){
		$scope.user = user;
		$location.url('/success/'+user._id);
		console.log(user.first_name)
	}
	function error(err){
		$scope.message = err;
	}
	$scope.loginUser = function(){
		usersFactory.loginUsers($scope.user, success, error, getUser)
	}
}])