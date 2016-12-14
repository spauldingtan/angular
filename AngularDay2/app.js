

// var app = angular.module("myapp", []);       //// you can't have it both ways!!!

var myAppModule = angular.module("myapp", []);


   myAppModule.filter("greet", function() {
       return function(name) {
           return "Hello, " + name + "!";
       };
   });
myAppModule.controller("myCtrl", ["$scope", function ($scope) {
    $scope.firstWord = "FLASH, ";
    $scope.secondWord = "DEFENDER OF THE UNIVERSE";
}]);