var pokemonApp = angular.module("pokemonApp", []);


pokemonApp.controller("pokemonController", function($scope) {
    $scope.intro = "Welcome to the pokemon game";

    $scope.pokemonCharacters = [
        { name: "Pikachu"},
        { name: "Bulbasur"},
        { name: "Charizard"}
    ]
});