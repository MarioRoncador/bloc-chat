(function() {
  function BlocChatCookies($cookies, $uibModal) {
      
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
     var modalInstance = $uibModal.open({
          templateUrl: '/templates/cookiesModal.html', 
          controller: 'BlocChatCookiesCtrl',
          controllerAs: '$bcc',
      })
    }
      modalInstance.result.then(function(result) {
          //store user into the cookie
          console.log(result);
      });
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();