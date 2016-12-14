(function() {
    angular.module("myapp", []);

    angular.module("myapp")
        .controller("myController", function() {
        var vm = this;
        vm.msg = "Hello World!";
        vm.number = 4;
        vm.result;
        vm.double = function (multiplier) { //multiplier passes in a number with which to multiply the number by.  Comes from the button ng-click
            vm.result = vm.number * multiplier;
        }
    })
})();