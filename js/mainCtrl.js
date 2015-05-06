var app = angular.module('quoteBook');

app.controller('mainController', function($scope, dataService) {

    $scope.addName = '';
    $scope.addQuote = '';
    $scope.removeQuote = '';
    $scope.sortBy = 'author';
    $scope.order = true;

    var getDataFromService = function() {
        $scope.data = dataService.getData();
    }();

    $scope.removeQuoteObj = function() {
        dataService.removeData($scope.removeQuote);
        $scope.removeQuote = '';
    };


    $scope.addQuoteObj = function() {
        dataService.addData({
            text: $scope.addQuote,
            author: $scope.addName,
        });
        $scope.addName = '';
        $scope.addQuote = '';
    };


    //dataService.removeData('Life isn\'t about getting and having, it\'s about giving and being.');


});
