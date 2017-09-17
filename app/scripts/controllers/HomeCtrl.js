(function(){
  function HomeCtrl (Room, Message, $uibModal, $cookies) {
    this.currentRoom = {};
    this.currentUser = $cookies.get('ChatCurrentUser');
    this.rooms = Room.all;
    this.newMessage = {};
   
      
    this.addRoom = function() {
        $uibModal.open({
            templateUrl: '/templates/modal.html',
            size: 'sm',
            controller: 'ModalCtrl as modal'
        });

    }

    this.createCurrentRoom = function (room) {
       this.currentRoom = room;
       this.messages = Message.getByRoomId(this.currentRoom.$id);
       console.log(this.messages);
    }

    this.sendMessage = function(){
      this.newMessage.roomId = this.currentRoom.$id;
      this.newMessage.username = this.currentUser;
      Message.send(this.newMessage);
    }

  }

  angular
    .module('chatRoomProject')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal','$cookies', HomeCtrl]);
})();

