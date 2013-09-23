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
}]);

app.controller("RevealDemoCntrl", ["$scope", function($scope){
  $scope.visible = false;
  $scope.openModal = function() {
    $scope.visible = true;
  }
}]);

app.controller("SectionDemoCntrl", ["$scope", function($scope){
  $scope.activeIdx = 0;
  $scope.sections = [
    {title: "Section 1", content: "Content 1 goes here!"},
    {title: "Section 2", content: "Content 2 goes here!"},
    {title: "Section 3", content: "Content 3 goes here!"}
  ];
  $scope.getClass = function(idx) {
    if (idx === $scope.activeIdx) return "active";
  };
  $scope.setActiveIdx = function(idx) {
    $scope.activeIdx = idx;
  };
}]);