(function() {
    "use strict";

    var module = angular.module("registerForm");

    function controller($http) {
    }
    
    module.component("registerForm", {
        templateUrl: "/register-form/register-form.component.html",
        controllerAs: "register",
        controller: ["$http", controller]
    });

} ());