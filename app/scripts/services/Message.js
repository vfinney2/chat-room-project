(function() {
     function Message($firebaseArray, $cookies) {
         var Message = {};
         
         var ref = firebase.database().ref().child("messages");
         var messages = $firebaseArray(ref);
         Message.all = messages;
         
         Message.getByRoomId = function (roomId) {
             return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
         }
         
        Message.send = function(newMessage) {
            newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
            messages.$add(newMessage);
    };
         
         return Message;
     }
     
     angular
         .module('chatRoomProject')
         .factory('Message', ['$firebaseArray', Message]);
 })();


