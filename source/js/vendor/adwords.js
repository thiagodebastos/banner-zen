var bgExit;

startAd = function() {
  "use strict";
  bgExit = document.getElementById("ad");
  addListeners();
  // TODO: @thiago fix this bug
  // animation();
};

addListeners = function() {
  "use strict";
  addEventListener("click", onExitHandler, false);
};

onExitHandler = function(e) {
  "use strict";
  ExitApi.exit();
  console.log("Exit code Initialized");
};

window.onload = startAd();
