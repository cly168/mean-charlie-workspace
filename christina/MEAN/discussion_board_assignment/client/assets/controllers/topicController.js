app.controller('topicController', ['$scope', 'usersFactory', '$routeParams', '$cookies', '$location', 'topicFactory', '$routeParams', function($scope, usersFactory, $routeParams, $cookies, $location, topicFactory, $routeParams){
	$scope.users=[];
	$scope.user={};
	$scope.user = $cookies.user;
	$scope.categories = [];
	$scope.category = {};
	$scope.error = '';
	$scope.topic = {};
	$scope.post = {};
	$scope.comment = [];
	function getTopic(topic){
		console.log(topic)
		$scope.topic = topic;
		$scope.topic.comment = [];
	}
	function getComments(comments){
		
	}
	function showTopic(){
		topicFactory.showTopics($routeParams.id, getTopic, error);
	}
	function error(err){
		$scope.error = err;
	}
	$scope.addPost = function(){
		$scope.post._user = $scope.user;
		$scope.post._topic = $scope.topic;
		// console.log($scope.post)
		topicFactory.addPosts($scope.post, error)
		topicFactory.showTopics($routeParams.id, getTopic, error);
	}
	$scope.addComment = function(index){
		if($scope.comment[index]){
			$scope.comment[index]._user = $scope.user;
			$scope.comment[index]._post = $scope.topic.post[index];
			console.log($scope.comment[index]);
			topicFactory.addComments($scope.comment[index], showTopic, error)
		}
	}
	topicFactory.showTopics($routeParams.id, getTopic, error);
}])
