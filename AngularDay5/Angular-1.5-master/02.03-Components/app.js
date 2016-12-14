(function () {

    // this CREATES the myApp module (because it has the second, array parameter)
    // angular.module('myApp', ["ui.router"])
    //
    //     .config(function ($stateProvider, $urlRouterProvider) {
    //         $urlRouterProvider.otherwise("myExample");
    //
    //
    //         $stateProvider.state("myExample", {
    //             url: "/myExample",
    //             template: "<my-example></my-example>"
    //         }).state("component1", {
    //             url: "/component1",
    //             template: "<component1></component1>"
    //         })
    //     });

    angular.module('myApp', ['ui.router'])
        .controller("MyController", function ($state) {
            var vm = this;
            vm.goToComponent = function () {
                //transition to component1 state
                console.log("transition to component 1 state");
                $state.go("component1");
            }
        })

        .config(function ($stateProvider, $urlRouterProvider) {
            //
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/myExample");
            //
            // Now set up the states
            $stateProvider.state('myExample', {
                url: "/myExample",
                template: "<component1></component1>"
            }).state('component1', {
                url: "/component1",
                template: "<my-example></my-example>"
            });
        });

})();