(function() {
    function HomeCtrl($uibModal, Room) {
        this.homeTitle = "Bloc Chat";
        this.rooms = Room.all;

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
            }, function() {
                console.log('modal-component dismissed at: ' + new Date());
            });
        };
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', HomeCtrl]);
})();
