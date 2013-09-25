angular.module("foundation.animations", [])
.animation(".fade-out-animation", function() {
  return {
    leave: function(element, done) {
      element.fadeOut(function() {
        console.log('fade-out-animation');
        done();
      });
    }
  };
})
.animation(".disappear-animation", function() {
  return {
    leave: function(element, done) {
      console.log('disappear-animation');
      element.animate({top:"-200px"}, 3000, function(){ done(); });
    }
  };
});