app.controller('indexController', ['$scope', 'usersFactory', '$routeParams', '$cookies', '$location', 'topicFactory', function($scope, usersFactory, $routeParams, $cookies, $location, topicFactory){
	$scope.users=[];
	$scope.user={};
	$scope.user = $cookies.user;
	$scope.categories = [];
	$scope.category = {};
	$scope.error = '';
	$scope.topic = {};
	$scope.topic._user = $scope.user;

	function redirect(topic){
		$location.url('/topic/'+topic._id);
	}
	function getTopic(topic){
		$scope.topics = topic;
		$scope.topic={};
		$scope.topic._user = $scope.user;
		$scope.topic.post = [];
		$scope.topic.comment = [];
	}
	function getCategory(categories){
		$scope.categories = categories;
	}
	function error(err){
		$scope.error = err;
	}
	$scope.addTopic = function(){
		topicFactory.addTopics($scope.topic, redirect, error)
	}
	topicFactory.getTopics(getTopic, error);
	topicFactory.getCategories(getCategory, error);
}])