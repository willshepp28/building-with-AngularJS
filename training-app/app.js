var myApp = angular.module("myApp", []); // take the name of the app and a array of dependencies


// Declare a controller
myApp.controller("mainController", function($scope, $log, $filter){
    
    $scope.name = "Will";
    $scope.formattedname = $filter("uppercase")($scope.name);


    $log.log($scope.name);
    $log.info($scope.formattedname)
});



