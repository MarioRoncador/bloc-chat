(function() {
  function BlocChatCookies($cookies, $uibModal) {
      
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
     var modalInstance = $uibModal.open({
          templateUrl: '/templates/cookiesModal.html', 

      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();