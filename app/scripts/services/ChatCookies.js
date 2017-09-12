(function() {
  function ChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('ChatCurrentUser');
    if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: 'templates/username.html',
                size: 'sm',
                controller: 'LoginCtrl as user',
                keyboard: false,
                backdrop: 'static'
            });
    }
  }

  angular
    .module('chatRoomProject')
    .run(['$cookies', '$uibModal', ChatCookies]);
})();



