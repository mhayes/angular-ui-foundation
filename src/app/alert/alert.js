angular.module("foundation.alert", [])
  .directive("alert", function($window, $animate) {
    return {
      restrict: "E",
      scope: {
        type: "=",
				close: "&",
        fadeoutspeed: "="
      },
      replace: true, // otherwise .wave binding goes to parent and $animate sorta breaks
      transclude: true,
      templateUrl: "/src/app/alert/alert.html",
      link: function(scope, element, attrs) {
        element.addClass(attrs.animation + '-animation');
        scope.close = function() {
          // $animate.leave: element determines which animation is called
          $animate.leave(element, $.noop);
        };
      }
    };
  });
