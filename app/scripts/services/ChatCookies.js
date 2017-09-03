(function() {
  function ChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('ChatCurrentUser');
    if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/username.html',
                controller: function($scope, $cookies, $uibModalInstance){
                  $scope.setuserName = function(currentUser) {
                    if (currentUser && currentUser !== ''){
                      $cookies.put('ChatCurrentUser', currentUser);
                      $uibModalInstance.close(false);  
                    } else {
                      alert("Username is not valid");
                    }
                  };
                }
          
                size: 'sm',
                backdrop: 'static'
      });
    }
  }

  angular
    .module('chatRoomProject')
    .run(['$cookies', '$uibModal', ChatCookies]);
})();


