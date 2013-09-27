var app = angular.module("FoundationDemoApp", ["foundation"]);

app.controller("MainCtrl", ["$scope", function($scope){
  //return true;
  $scope.title = "Angular-UI Foundation";
}]);

app.controller("AlertDemoCtrl",["$scope", function($scope){
  $scope.alerts = [
    {type:'success', message:'Completed successfully!'},
    {type:'alert', message:'Oh noes!'}
  ]
}]);

app.controller("RevealDemoCtrl", ["$scope", function($scope){
  $scope.slideTopModal = function() {
    $scope.slideTop = true;
  };
	$scope.slideLeftModal = function() {
		$scope.slideLeft = true;
		$scope.slideTop = false;
	};
	$scope.fadeInModal = function() {
		$scope.fadeIn = true;
	};
}]);

app.controller("SectionDemoCtrl", ["$scope", function($scope){
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