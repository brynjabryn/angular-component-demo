(function(){
    'use strict';
    var app = angular.module('ComponentDemoApp');

    function ImageCarouselCtrl () {
        var self = this;
        
        // A few images for dummy data - to be replaced with a service
        self.images = [{
            name: "State Fair Ice Cream",
            source: "https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/10653657_10204433317214308_4905977233063679039_n.jpg?oh=23d3825b2d163386dbcf8b1d89cb04d7&oe=593AA687"
        }, {
            name: "Parade Time!",
            source: "https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/1014216_10151562810377260_1461664010_n.jpg?oh=90868000711a01430e39c4d3e491b8fa&oe=5937E646"
        }, {
            name: "First Day at Kindergarten",
            source: "https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/10259706_10153234081803212_8144993879571403240_n.jpg?oh=7017da5f3b491c0a810119b2ea5ae111&oe=59704DA7"
        }];     
    }
    
    app.component('imageCarousel', {
        // Loading the template
        templateUrl: '/app/components/image-carousel/imageCarousel.html',
        controller: ImageCarouselCtrl 
    });
})();