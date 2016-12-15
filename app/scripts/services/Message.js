(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
         
    return {
      all: messages,
      addMessage: function(content) {
        messages.$add({
            content: content,
            createdAt: new Date().getTime(),
            sender: "John",
        });
      },
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();