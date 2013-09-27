angular.module("foundation.reveal", [])
  .directive("reveal", function(){
    return {
      restrict: "E",
      scope: {
        visible: "="
      },
      transclude: true,
      replace: false,
      templateUrl: "/src/app/reveal/reveal.html",
      link: function(scope, element, attrs) {
        var modal = element.find('.reveal-modal');
	      modal.addClass(attrs.animation + '-animation');
        scope.close = function(){
          scope.visible = false;
        };
      }
    };
  });