var myApp = angular.module("myApp", ["ngMessages", "ngResource"]); // take the name of the app and a array of dependencies


// Declare a controller
myApp.controller("mainController", ["$scope", "$log", function($scope, $log, $filter, $resource){
    
    $scope.name = "Will";
    $scope.formattedname = $filter("uppercase")($scope.name);


    $log.log($scope.name);
    $log.info($scope.formattedname)
}]);



