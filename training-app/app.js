var myApp = angular.module("myApp", ["ngMessages", "ngResource"]); // take the name of the app and a array of dependencies


// Declare a controller
myApp.controller("mainController", ["$scope", "$log", "$timeout", function($scope, $log, $timeout){
    
    $scope.name = "Will";
    $scope.url = "";
  
    $timeout(function(){
        $scope.name = "World";
    }, 3000);

    $scope.sayMyName = function(){
        alert("Hey " + $scope.name);
    }

    $log.log($scope.name);
    $log.info($scope.formattedname)
}]);




