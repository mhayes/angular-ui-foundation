angular.module("foundation.reveal", [])
  .directive("reveal", function($animate){
    return {
      restrict: "E",
      scope: {
        visible: "="
      },
      transclude: true,
      replace: true,
      templateUrl: "/src/app/reveal/reveal.html",
      link: function(scope, element, attrs) {
        element.ready(function(){
          element.addClass(attrs.animation + '-animation');
        });
        scope.visible = false;
        // May be able to do a callback by watching this???

        scope.close = function(){
          scope.visible = false;
        };
      }
    };
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
    };
  });