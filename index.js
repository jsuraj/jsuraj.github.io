var app = angular.module('MyApp', ['ngMaterial','ngRoute','ngMessages'])
					.config(function($routeProvider, $locationProvider) {
						$locationProvider.html5Mode(true)
						$routeProvider
							.when('/', {
								templateUrl : '/templates/about.html',
								controller : 'TabCtrl'
							})
							.when('/about', {
								templateUrl: '/templates/about.html',
								controller : 'TabCtrl'
							})
							.when('/projects', {
								templateUrl: '/templates/projects.html',
								controller : 'TabCtrl'
							})
							.when('/contact', {
								templateUrl: '/templates/contact.html',
								controller : 'TabCtrl'
							})			
					});

function TabCtrl($scope){
	$scope.currentNavItem = 'page1';
	// console.log("currentNavItem:", $scope.currentNavItem);
}

function ACtrl($scope){

}
function PCtrl($scope){
	
}
function CCtrl($scope){
	
}
app.controller('TabCtrl', TabCtrl);
app.controller('ACtrl', ACtrl);
app.controller('PCtrl', PCtrl);
app.controller('CCtrl', CCtrl);