
(function() {
  function ModalCtrl($scope, Room, $uibModalInstance) {
    
        var modal = this;
    
        modal.cancel = function() {
        $uibModalInstance.close(false);
        }
    
        modal.createRoom = function() {
        Room.add(modal.newRoom);
        $uibModalInstance.close();
      
          
        }
      }

  angular
    .module('chatRoomProject')
    .controller('ModalCtrl', ['$scope','Room','$uibModalInstance', ModalCtrl]);
})();

