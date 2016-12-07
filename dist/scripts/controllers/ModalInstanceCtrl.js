 (function() {
     function ModalInstanceCtrl($uibModalInstance) {
         this.ModalTitle = "New Chat Room Name"
         //this.rooms = Room.all;
         //Room.addRoom("Chat Room 3");    
      /*   var $ctrl = this;
             var modalInstance = $uibModal.open({
             animation: $ctrl.animationsEnabled,
             ariaLabelledBy: 'modal-title',
             ariaDescribedBy: 'modal-body',
             templateUrl: 'templates/modal.html',
             size: size,
             appendTo: parentElem,
             resolve: {
                 items: function () {
                    return $ctrl.;
                 }   
             }
        });
        
        
*/
         
           this.ok = function () {
                $uibModalInstance.close('Ryan');
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