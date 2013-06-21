angular.module("ui.foundation", ["ui.foundation.utils","ui.foundation.alert", "ui.foundation.reveal"]);

angular.module("ui.foundation.utils", [])
  .directive("containerSize", function() {
    return {
      restrict: "A",
      controller: function($element, $window) {
        angular.element($window).bind("resize", function(){
          var el = angular.element($element);
          el.css({width: "", height: ""});
          el.css({
            width: el.width(),height: el.height()
          });
        });
      },
      link: function(scope, el, attrs) {
        console.info(attrs);
        el.ready(function(){
          el.css({width: "",height: ""});
          el.css({
            width: el.width(),height: el.height()
          });
        });
        el.find("img").load(function(){
          el.css({width: "",height: ""});
          el.css({
            width: el.width(),height: el.height()
          });
        });
      }
    }
  });

angular.module("ui.foundation.alert", [])
  .directive("alert", function($window) {
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
        element.ready(function(){

          console.info(element.width());
        });
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
        });
        $scope.toggle = function() {
          $scope.visible = !$scope.visible;
        };
      },
      transclude: true,
      templateUrl: "../templates/reveal.html"
    }
  });