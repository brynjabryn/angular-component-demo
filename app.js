(function () {
    var app = angular.module('ComponentDemoApp', []);
    
    // Initialize the Facebook SDK
    var fbAsyncInit = function() {
        FB.init({ 
          appId: 'FACEBOOK_APP_ID',
          status: true, 
          cookie: true, 
          xfbml: true,
          version: 'v2.8'
        });
    };
    
    (function(d){
        // Lead the Facebook Javascript SDK

        var js,
        id = 'facebook-jssdk',
        ref = d.getElementsByTagName('script')[0];

        if (d.getElementById(id)) {
          return;
        }

        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";

        ref.parentNode.insertBefore(js, ref);
    }(document));
    
    // A controller that displays hello world
    app.controller('HomeCtrl', function () {
        this.message = "Hello, World!";
    });
})();