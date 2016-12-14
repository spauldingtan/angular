(function(){

    angular.module('myApp')
        .component('component1', { // the tag for using this is <my-example></my-example>
            templateUrl: "component1/component1.component.html",
            controller: componentOneController
        });

    // here we use "Dependency Injection" to inject the Angular $log service into this controller
    function componentOneController($log, $location) {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        // this line prints the full URL to the console
        $log.debug($location.absUrl());
    }

})();
