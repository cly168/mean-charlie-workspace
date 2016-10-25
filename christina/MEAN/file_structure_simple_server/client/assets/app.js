var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'index.html'
		})
		.when('/friends',{
			templateUrl: 'partials/new.html',
			controller: 'newController'
		})
		.when('/friends/:id', {
			templateUrl: 'partials/edit.html',
			controller: 'editController'
		})
		.otherwise({
			redirectTo: 'index.html'
		})
})