(function() {
  function Message($firebaseArray) {

    var room = "-KY4gRoWdWnpb7goJZgS";
      
    var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(room); 
    var messages = $firebaseArray(ref);
    
    var date = new Date().getTime();
    d = new Date(date);
     
    
    return {
      all: messages,
      addMessage: function(sender, content, roomId) {
        messages.$add({
            createdAt: d.toString(),
            sender: sender,
            content: content,
            roomId: roomId,
        });
      },
    };
    
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();