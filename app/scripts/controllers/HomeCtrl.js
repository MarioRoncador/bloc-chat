(function() {
    function HomeCtrl($cookies, $uibModal, Room, Message) {
        var vm = this;
        this.activeRoom = "";
        this.homeTitle = "Bloc Chat";
        this.messages = Message.all;
        this.rooms = Room.all;

          vm.user = $cookies.get('New');
          console.log(vm.user);

        
        this.addSender = function(sender, content) {
            var sender = prompt("Insert Your Name:");
            var content = prompt("Insert Your Message:");
//            roomId = roomId || "-KY4gRoWdWnpb7goJZgS";
            Message.addMessage(sender, content, this.activeRoom);
        };
        
        this.selectRoomID = function(roomId){
            vm.activeRoom = roomId;
            console.log(vm.activeRoom);
            vm.messages = Message.getMesagesForRoom(vm.activeRoom);
        };
        

        console.log(vm.activeRoom +": This is form the HomeCtrl");
        
        this.open = function(size, parentSelector) {
            console.log("Attempting to open modal window.");

            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                resolve: {}
            });

            modalInstance.result.then(function(newRoomInfo) {
                console.log("The new room name is: " + newRoomInfo.name);
                // Make the new room in Firebase here, based on NewRoomName from the modal
                Room.addRoom(newRoomInfo.name);
            }, function() {
                console.log('modal-component dismissed at: ' + new Date());
            });
        };
        
        
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$cookies','$uibModal', 'Room', 'Message', HomeCtrl]);
})();