(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;
    
    Room.add = function(room){
      rooms.$add({'roomName':roomName,'User':'M&V'}); 
    }

    return Room;
  }

  angular
    .module('chatRoomProject')
    .factory('Room', ['$firebaseArray', Room]);
})();