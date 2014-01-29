var App = angular.module('FEDTemplateDocApp', []);

App.controller('SCSSCtrl', function($scope, $http) {
	$http.get('js/sassdoc.json')
		.then(function(res) {
			$scope.objects = res.data;
			console.log(res.data);
		});
});