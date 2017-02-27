(function(){
    'use strict';
    var app = angular.module('ComponentDemoApp');

    function MenuBarCtrl () {
        var self = this;
        // A list of menus
        self.menu = [{
            name: "Home",
            component: "home"
        }, {
            name: "About",
            component: "about"
        }, {
            name: "Contact",
            component: "contact"
        }];     
    }
    app.component('menuBar', {
        // Defines a two way binding in and out of the component
        bindings: {
            brand:'<'
        },
        
        // Load the template
        templateUrl: '/app/components/menu-bar/menuBar.html',
        controller: MenuBarCtrl 
      });
})();