// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

var bgExit;

//Function to run with any animations starting on load, or bringing in images etc
init = function() {
  "use strict";
  bgExit = document.getElementById("ad");
  addListeners();
  // TODO: @thiago fix this bug
  // animation();
};

addListeners = function() {
  "use strict";
  addEventListener("click", bgExitHandler, false);
};

bgExitHandler = function() {
  "use strict";
  //AdWords Click
  ExitApi.exit();
  console.log("Exit code Initialized");
};

window.onload = init();
