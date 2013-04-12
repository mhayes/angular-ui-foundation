angular.module("ui.foundation", ["ui.foundation.alert", "ui.foundation.reveal"]);

angular.module("ui.foundation.alert", [])
  .directive("alert", function() {
    return {
      restrict: "E",
      scope: {
        type: "=",
        close: "&"
      },
      transclude: true,
      templateUrl: "../templates/alert.html",
      link: function(scope, element, attrs) {
        // true if this condition
        // <alert close=""></alert>
        scope.closeable = "close" in attrs;
      }
    }
  });

angular.module("ui.foundation.reveal", [])
  .directive("reveal", function(){
    return {
      restrict: "E",
      scope: {
        visible: "="
      },
      controller: function($scope){
        $scope.$watch('visible', function() {
          if (typeof console === 'object') {
            console.info('visible changed: ' + $scope.visible);
          }
        });
        $scope.toggle = function() {
          $scope.visible = !$scope.visible;
        };
      },
      transclude: true,
      templateUrl: "../templates/reveal.html"
    }
  });