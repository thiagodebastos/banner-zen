animationRes = function(element, timeout) {
  // variable to hold all classes
  var allClasses = [];
  setTimeout(function() {
    // get all children of passed parameter and iterate through them
    $(element).children().each(function(index) {
      // get the className of each child element and push into the array
      allClasses.push(this.className);
      // console.log(allClasses);
      $(element).addClass('animationReset');
      $(this).removeClass();
    });
  }, timeout);

  setTimeout(function() {
    $(element).children().each(function(index) {
      var thisEl = $(this);

      $(this).map(function() {
        thisEl.addClass(allClasses[0]);
        allClasses.shift();
      $(element).removeClass('animationReset');
      });

      // console.log(thisEl)
    });
  }, timeout + 250);
}

var time = 0;

function animate(container, loops, delay){
  var i;
  for(i=1; i<loops; i++){
    animationRes(container, time += delay);
    // console.log('loop #' + i)
  };
};

animate('#container', 1, 8000);
