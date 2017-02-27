function MenuCtrl() {
    // Initial dummy data
    var self = this;
    
    self.items = [
        {
            name: 'Oranges',
            id: '1'
        },
        {
            name: 'Apples',
            id: '2'
        }  
    ]
    
}

angular.module('ComponentDemoApp').component('menu', {
    templateUrl: 'menu.html',
    controller: MenuCtrl
})