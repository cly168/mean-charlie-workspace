app.controller('editController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, rParams) {
  /* Public Properties */
  var self = this;
  this.controlValue = "Current Name:";
  /* Public Methods */
  this.getUser = function() {
    userFactory.show(rParams.id, function passedToUserFactoryShow(user) {
      $scope.user = user;
    })
  }

  this.updateUser = function(){
    console.log($scope, rParams.id)
    userFactory.update($scope.users, rParams.id, function passedToUserFactoryUpdate(userFromFactory){
      $scope.user = userFromFactory;
      // what is this?
      self.controlValue = "Updated Name: "
    });
  }
  /* on load time */
  this.getUser();
  console.log(this);
}]);