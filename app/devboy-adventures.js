angular.module("DevboyAdventures" , [
    "ui.router",
//    "ngAnimate",
//    "ngAria",
//    "ngMessages",
//    "ngSanitize",
    "ngMaterial"
])

.config(function($mdThemingProvider){
    $mdThemingProvider.theme("default").primaryPalette("blue-grey");
})

.config(function($locationProvider){
    $locationProvider.html5Mode(true); 
})

.config(function($stateProvider, $urlRouterProvider){
    
    var homeState = {
        "name" : "home",
        "url" : "/home",
        "templateUrl" : "views/home.html"
    };
    
    var aboutState = {
        "name" : "about",
        "url" : "/about",
        "templateUrl" : "views/about.html"
    };
    
    var adventureState = {
        "name" : "adventure",
        "url" : "/adventure",
        "templateUrl" : "views/adventure.html"
    };
    
    var contactState = {
        "name" : "contact",
        "url" : "/contact",
        "templateUrl" : "views/contact.html"
    };
    
    var toolsState = {
        "name" : "tools",
        "url" : "/tools",
        "templateUrl" : "views/tools.html"
    };
    
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state(homeState);
    $stateProvider.state(aboutState);
    $stateProvider.state(adventureState);
    $stateProvider.state(contactState);
    $stateProvider.state(toolsState);
});