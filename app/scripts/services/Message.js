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
         var msg = "Adding message to room " + roomId + " as " + sender + ":\n\t" + content;
          console.info(msg);
          var messageData = {
            createdAt: d.toString(),
            sender: sender,
            content: content,
            roomId: roomId,
            };
         console.info("Message data:");
         console.info(messageData);
         messages.$add(messageData);
      },
    };
    
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();