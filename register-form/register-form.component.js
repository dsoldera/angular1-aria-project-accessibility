
(function() {
    "use strict";
    
    function registerFormController($scope, $element, $attrs) {
        var model = this;
        $scope.email = {
            placeholder: "Enter email",
            text: "",
            word: /^\s*\w*\s*$/
        };
    }
    
    angular.module("ariaFormApp").component("registerFormCtrl", {
        templateUrl: "/register-form/register-form.component.html",
        controllerAs: "model",
        controller: registerFormController
    });
} ());