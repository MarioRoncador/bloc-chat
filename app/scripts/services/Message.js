(function() {
  function Message($firebaseArray) {

       
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
    var date = new Date().getTime();
    d = new Date(date);
     
    
    return {
        all: messages,
        getMesagesForRoom: function(roomId) {
                var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId);
                var messages = $firebaseArray(ref);
                return messages;
        },
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
        send: function(newMessage) {
        // Send method logic
      }
    };
    
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();