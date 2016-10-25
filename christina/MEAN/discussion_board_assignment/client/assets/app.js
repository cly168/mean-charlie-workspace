var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/registration.html',
		controller: 'regController'
	})
	.when('/success', {
		templateUrl: 'partials/success.html',
		controller: 'indexController'
	})
	.when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'loginController'
	})
	.when('/topic/:id', {
		templateUrl: 'partials/topic.html',
		controller: 'topicController'
	})
	.otherwise({
		redirectTo: 'partials/registration.html'
	})
})