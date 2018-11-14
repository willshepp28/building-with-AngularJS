var pokemonApp = angular.module("pokemonApp", []);


pokemonApp.controller("pokemonController", function($scope) {
    $scope.intro = "Welcome to the pokemon game";

    $scope.pokemonCharacters = [
        { name: "Pikachu", image: "https://vignette.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/200?cb=20140328192412"},
        { name: "Bulbasur", image: "https://vignette.wikia.nocookie.net/pokemon-planet/images/4/4e/250px-001Bulbasaur.png/revision/latest/scale-to-width-down/200?cb=20180720013708"},
        { name: "Charizard", image: "https://vignette.wikia.nocookie.net/mario/images/7/7e/006Charizard.png/revision/latest?cb=20180903174931"}
    ];


});


pokemonApp.controller("getPokemon", function($scope, $http) {
    $http({
        method: "GET",
        url: "https://pokeapi.co/api/v2/generation/"
    })
    .then(function success(response) {
        console.log(response);
    },
    function error(response){
        console.log(response);
    })
    
})