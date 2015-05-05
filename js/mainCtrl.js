var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){

	$scope.quotes = dataService.getData();
	$scope.getQuote = function(){
		dataService.addData();
	};

	$scope.removeQuote = function(){
		dataService.removeData();
	};
});