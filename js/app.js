var App = angular.module('PhoenixDocApp', ['ngSanitize']);

App.controller('SCSSCtrl', function($scope, $http) {
	$http.get('Assets/documentation-sassdoc/sassdoc.json')
		.then(function(res) {
			$scope.objects = res.data;
			$scope.dataLoaded = true;
		}, function(data) {
			$scope.dataLoaded = false;
		});
});