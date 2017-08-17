(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all;
    }

    angular
        .module('chatRoomProject')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();