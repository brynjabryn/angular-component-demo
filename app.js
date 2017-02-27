(function () {
    var app = angular.module('ComponentDemoApp', []);
    
    // A controller that displays hello world
    app.controller('HomeCtrl', function () {
        this.message = "Hello, World!";
    });
})();