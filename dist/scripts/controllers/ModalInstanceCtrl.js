 (function() {
     function ModalInstanceCtrl($uibModalInstance) {
         this.ModalTitle = "New Room"
         //this.rooms = Room.all;
         //Room.addRoom("Chat Room 3");    
    
//         this.chat = function() {
//            var _name = 'Brian';
//            ngModal.chat = {
//            name: function(newName) {
//     // Note that newName can be undefined for two reasons:
//     // 1. Because it is called as a getter and thus called with no arguments
//     // 2. Because the property should actually be set to undefined. This happens e.g. if the
//     //    input is invalid
//            return arguments.length ? (_name = newName) : _name;
//            }
//            };
//        };
         
         this.submit = function () {
                newRoom = 
                $uibModalInstance.close(newRoom);

            };

           this.cancel = function () {
                $uibModalInstance.dismiss('cancel');
           };
  
            console.log("From IN the ModalInstanceCtrl");

     }
 
     angular
         .module('blocChat')
         .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
 })();