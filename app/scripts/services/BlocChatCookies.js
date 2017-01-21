(function() {
  function BlocChatCookies($cookies, $uibModal) {
      
         var currentUser;
      //   $cookies.put('New', ''); // Deletes the user everytime the app is restarted
      
    if (!currentUser || currentUser === '' || currentUser === undefined ) {
     var modalInstance = $uibModal.open({
          templateUrl: '/templates/cookiesModal.html', 
          controller: 'BlocChatCookiesCtrl',
          controllerAs: '$bcc',
          backdrop  : 'static',
          keyboard  : false
      })
    }
      modalInstance.result.then(function(result) {
          $cookies.put('New',result); //store user into the cookie
          currentUser = $cookies.get('New');
          console.log(currentUser+": From the cookie");
          console.log(result+": From the service");
      });
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();