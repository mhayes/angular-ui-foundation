var app = angular.module("FoundationDemoApp", ["ui.foundation"]);

app.controller("MainCntrl", ["$scope", function($scope){
  //return true;
  $scope.title = "Angular-UI Foundation";
}]);

app.controller("AlertDemoCntrl",["$scope", function($scope){
  $scope.alerts = [
    {type:'success', message:'Completed successfully!'},
    {type:'alert', message:'Oh noes!'}
  ]
  $scope.closeAlert = function($index) {
    $scope.alerts.splice($index, 1);
  }
}]);

app.controller("RevealDemoCntrl", ["$scope", function($scope){
  $scope.visible = false;
  $scope.openModal = function() {
    $scope.visible = true
  }
}]);