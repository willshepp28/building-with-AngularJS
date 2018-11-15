 angular.module("myApp", ["ngRoute"])
.config(["$routeProvider", "$locationProvider", function($routeProvider){

    $routeProvider  
        .when("/main", {
            controller: "mainController",
            templateUrl: "pages/main.html"
        })
        .when("/second", {
            controller: "secondController",
            templateUrl: "pages/second.html"
            
        })
        .when("/user/:id", {
            controller: "userController",
            templateUrl: "pages/user.html"
        })
        
        // $locationProvider.html5Mode(true);
        
      
}])
.controller("mainController",["$scope", function($scope) {
    $scope.messages ="Main Page, yup";
}])
.controller("secondController", ["$scope", function($scope){
    $scope.messages = "Second Page"
}])
.controller("userController", ["$scope", "$routeParams", function($scope, $routeParams){
    $scope.userId = $routeParams.id;
}])

