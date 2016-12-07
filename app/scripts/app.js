 (function() {
     function config($stateProvider, $locationProvider) {
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
//         .state('modal', {
//             url: '/',
//             controller: 'ModalInstanceCtrl as modal',
//             templateUrl: '/templates/modal.html'
//         });
     }
     angular
         .module('blocChat', ['ui.bootstrap','ui.router','firebase'])
         .config(config);
 })();