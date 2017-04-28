var app = angular.module('MyApp', ['ngMaterial']);

function TabCtrl($scope){
	$scope.currentNavItem = 'page1';
}

app.controller('TabCtrl', TabCtrl);