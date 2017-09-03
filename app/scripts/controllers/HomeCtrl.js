(function(){
  function HomeCtrl (Room, Message, $cookies, $uibModal) {
    this.currentRoom = null;
    this.currentUser = $cookies.get('CurrentUser');
    this.rooms = Room.all;
      
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

  }

  angular
    .module('chatRoomProject')
    .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$uibModal', HomeCtrl]);
})();

