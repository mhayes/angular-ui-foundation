angular.module('foundation.orbit', ['rotator', 'ngTouch'])
	.controller('OrbitCtrl', ['$scope','$timeout', function($scope, $timeout) {

		$scope.currentIndex = 0;

		$scope.next = function() {
			$scope.currentIndex ++;
			if($scope.currentIndex === $scope.items.length) {
				$scope.currentIndex = 0;
			}
		};
		$scope.prev = function() {
			$scope.currentIndex --;
			if($scope.currentIndex < 0) {
				$scope.currentIndex = $scope.items.length - 1;
			}
		};
		$scope.$watch('currentIndex', function(index) {
			$scope.currentItem = $scope.items[index];
		});

		$scope.isActive = function(item) {
			return item === $scope.currentItem;
		};

		$scope.select = function(item) {
			$scope.currentItem = item;
		};

	}])
	.directive('orbit', ['rotatorService', function(rotatorService) {
		return {
			restrict: 'E',
			templateUrl: '/src/app/orbit/orbit.html',
			scope: {
				current: '&',
				items: '='
			},
			controller: 'OrbitCtrl'
		};
	}]);