(function() {
    function BlocChatCookiesCtrl($uibModalInstance) {
        
        var OK_TEXT = 'Submit';
        var TITLE = 'Insert Username';
        var vm = this;

        vm.MODAL_TITLE = TITLE;
        vm.OK_TEXT = OK_TEXT;
        vm.submit = submit;
       // vm.newUser = '';  // holds the new user
        
        function submit(user) {
            console.log(user + " From the Ctrl");
            $uibModalInstance.close(user); // this function doesn't work
        }
        
        /* set the new user
        function newUser() {
            vm.newUser;
        }
        */

    }
    angular
        .module('blocChat')
        .controller('BlocChatCookiesCtrl', ['$uibModalInstance', BlocChatCookiesCtrl]);
})();