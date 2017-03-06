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
        // Loading the template
        templateUrl: '/app/components/menu-bar/menuBarView.html',
        controller: MenuBarCtrl 
    });
})();