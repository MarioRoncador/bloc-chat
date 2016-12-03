 (function() {
     function HomeCtrl(Room) {
         this.homeTitle = "Bloc Chat";
         
         this.rooms = Room.all;
         //Room.addRoom("Chat Room 3");
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', HomeCtrl]);
 })();