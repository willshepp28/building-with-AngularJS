var myApp = angular.module("myApp", ["ngMessages", "ngResource"]); // take the name of the app and a array of dependencies


// Declare a controller
myApp.controller("mainController", ["$scope", "$log", "$timeout", "$http", function ($scope, $log, $timeout, $http) {

    $scope.name = "Will";
    $scope.url = "";

    $timeout(function () {
        $scope.name = "World";
    }, 3000);

    $scope.sayMyName = function () {
        alert("Hey " + $scope.name);
    }

    $scope.newUser = {
        name: "Tony",
        role: "user"
    };

    $http({
        method: "GET",
        url: "http://localhost:3000/api/v1/users"
    })
        .then(function (response) {
            $log.log(response.data);
            $scope.users = response.data;
        }, function (error) {
            $log.log(error);
        });


        $http({
            method: "POST",
            url: "http://localhost:3000/api/v1/users",
            data: $scope.newUser
        })
            .then(function (response) {
                $log.log(response.data);
                $scope.users = response.data;
            }, function (error) {
                $log.log(error);
            });
    




}]);




