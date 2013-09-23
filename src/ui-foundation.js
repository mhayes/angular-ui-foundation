angular.module("ui.foundation", ["ngAnimate", "ui.foundation.alert", "ui.foundation.reveal"]);

angular.module("ui.foundation.alert", [])
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
      templateUrl: "../templates/alert.html",
      link: function(scope, element, attrs) {
        // true if this condition
        // <alert close=""></alert>
        element.ready(function(){
          console.info(attrs.fadeoutspeed);
          console.info(element.width());
        });
        // scope.closeable = "close" in attrs;
        scope.close = function(event) {
          event.preventDefault();
          // $animate.leave: element determines which animation is called
          $animate.leave(element, $.noop);
        };
      }
    }
  })
  .animation(".alert-animation", function() {
    return {
      leave: function(element, done){
        element.fadeOut(function(){
          done();
        });
      }
    }
  });

angular.module("ui.foundation.reveal", [])
  .directive("reveal", function($animate){
    return {
      restrict: "E",
      scope: {
        visible: "="
      },
      transclude: true,
      replace: true,
      templateUrl: "../templates/reveal.html",
      link: function(scope, element, attrs) {
        scope.visible = false;
        // May be able to do a callback by watching this???

        scope.close = function(){
          scope.visible = false;
        };
      }
    }
  })
  .animation(".reveal-animation", function(){
    return {
      leave: function(element, done){
        done();
      },
      addClass: function(element, className, done){
        if (className === "ng-hide") {
          var modal = element.find(".reveal-modal");
          modal.animate({top:"-200px"}, 300, function(){ done(); });
        }
      },
      removeClass: function(element, className, done) {
        if (className === "ng-hide") {
          element.show();
          var modal = element.find(".reveal-modal");
          modal.css("top","-200px");
          done();
          modal.animate({top:"50px"},300, function(){ done(); });
        }
      }
    }
  });