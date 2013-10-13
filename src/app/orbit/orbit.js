angular.module('foundation.orbit', ['ngTouch'])
	.controller('OrbitCtrl', ['$scope', '$timeout', function($scope, $timeout) {

		$scope.currentIndex = 0;
		var currentTimeout;

		$scope.next = function() {
			$scope.currentIndex = ($scope.currentIndex+1 === $scope.items.length) ? 0 : ++$scope.currentIndex;
			restartTimer();
		};
		$scope.prev = function() {
			$scope.currentIndex = ($scope.currentIndex -1 < 0) ? ($scope.items.length - 1) : --$scope.currentIndex;
			restartTimer();
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

		var restartTimer = function() {
			if(currentTimeout) {
				$timeout.cancel(currentTimeout);
			}
			var interval = +$scope.interval;
			if( !isNaN(interval) && interval >=0) {
				currentTimeout = $timeout(function() {
					console.log(new Date());
					$scope.next();
					restartTimer();
				}, interval);
			}
		};

		$scope.$watch('interval', restartTimer);

	}])
	.directive('orbit', [function() {
		return {
			restrict: 'E',
			templateUrl: '/src/app/orbit/orbit.html',
			scope: {
				current: '&',
				items: '=',
				interval: '='
			},
			controller: 'OrbitCtrl'
		};
	}]);