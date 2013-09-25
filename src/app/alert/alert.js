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
        // true if this condition
        // <alert close=""></alert>
        element.ready(function(){
          element.addClass(attrs.animation + '-animation');
          // console.info(attrs.fadeoutspeed);
          // console.info(element.width());
        });
        // scope.closeable = "close" in attrs;
        scope.close = function(event) {
          event.preventDefault();
          // $animate.leave: element determines which animation is called
          $animate.leave(element, $.noop);
        };
      }
    }
  });
