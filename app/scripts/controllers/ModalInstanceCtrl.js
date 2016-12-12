 (function() {
    function ModalInstanceCtrl($uibModalInstance) {
        var CANCEL_TEXT = 'Cancel';
        var DEBUGABLE = false;
        var DEBUG_ENABLED = true;
        var OK_TEXT = 'Submit';
        var TITLE = 'Create New Room';
        var vm = this;

        vm.CANCEL_TEXT = CANCEL_TEXT;
        vm.MODAL_TITLE = TITLE;
        vm.OK_TEXT = OK_TEXT;
        vm.cancel = cancel;
        vm.debug = DEBUGABLE && DEBUG_ENABLED;
        vm.debuggable = DEBUGABLE;
        vm.newRoom = {};
        vm.newRoomMaster = {};
        vm.ok = submitForm;
        vm.reset = resetForm;
        vm.submit = submitForm;
        vm.toggleDebug = toggleDebug;

        activate();

        function activate() {
            console.log("From IN the ModalInstanceCtrl");
        }

        function cancel() {
            vm.reset();
            $uibModalInstance.dismiss('cancel');
        }

        function resetForm() {
            console.log("Resetting form");
            vm.newRoom = angular.copy(vm.newRoomMaster);
        }

        function submitForm() {
            console.log("Submitting form");
            $uibModalInstance.close(vm.newRoom);
        }

        function toggleDebug() {
            console.log("Toggleing debug mode");
            vm.debug = !vm.debug;
        }
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();