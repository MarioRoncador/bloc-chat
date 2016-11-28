 (function() {
     function HomeCtrl(Room) {
         this.homeTitle = "Home Page (from Controller)";
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', HomeCtrl]);
 })();