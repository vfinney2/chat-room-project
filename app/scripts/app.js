 (function() {
        function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });
 
         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             });
     }
 
     angular
  
         .module('chatRoomProject', ['ui.router', 'firebase'])
         .config(config);
 })();