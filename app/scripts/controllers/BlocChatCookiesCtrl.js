(function() {
    function BlocChatCookiesCtrl($uibModal) {
        
        var OK_TEXT = 'Submit';
        var TITLE = 'Insert Username';
        var vm = this;

        vm.MODAL_TITLE = TITLE;
        vm.OK_TEXT = OK_TEXT;
        vm.cancel = cancel;
        vm.newUser = '';  // holds the new user
        
        function cancel() {
            console.log("From the Ctrl");
            $uibmodal.dismiss('cancel'); // this function doesn't work
        }
        
        /* set the new user
        function newUser() {
            vm.newUser;
        }
        */

    }
    angular
        .module('blocChat')
        .controller('BlocChatCookiesCtrl', ['$uibModal', BlocChatCookiesCtrl]);
})();