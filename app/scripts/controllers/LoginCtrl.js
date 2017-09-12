(function() {
  function LoginCtrl(Room, $cookies, $uibModalInstance) {
        
    
        this.createUsername = function () {
        $cookies.put('ChatCurrentUser', this.username);
        $uibModalInstance.close();
          
        }
    }

  angular
    .module('chatRoomProject')
    .controller('LoginCtrl', ['Room','$cookies','$uibModalInstance', LoginCtrl]);
})();

