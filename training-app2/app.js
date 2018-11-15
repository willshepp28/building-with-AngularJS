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
.service("greetingService", function(){
    this.greeting = "hello";
})
.controller("mainController",["$scope", "$log", "greetingService", function($scope, $log, greetingService) {
    $scope.messages ="Main Page, yup";
    $log.log(greetingService.greeting);
}])
.controller("secondController", ["$scope", function($scope){
    $scope.messages = "Second Page"
}])
.controller("userController", ["$scope", "$routeParams", function($scope, $routeParams){
    $scope.userId = $routeParams.id;
}])

