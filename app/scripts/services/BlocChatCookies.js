(function() {
  function BlocChatCookies($rootScope, $cookies, $uibModal) {
      
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
          
          // $broadcast an event so that HomeCtrl can update the UI
          // ...
          $rootScope.$broadcast('change-username', {new_username: result});
          currentUser = $cookies.get('New');
          console.log(currentUser+": From the cookie");
      });
      
  //    debugger;
//      $rootScope.$emit('change-username', {foo: "bar"});

  }
    
   
  angular
    .module('blocChat')
    .run(['$rootScope', '$cookies', '$uibModal', BlocChatCookies]);
})();