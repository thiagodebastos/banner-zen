var bgExit;

startAd = function() {
  "use strict";
  bgExit = document.getElementById("ad");
  addListeners();
  animation();
};

addListeners = function() {
  "use strict";
  bgExit.addEventListener('click', onExitHandler, false);
};

onExitHandler = function(e) {
  "use strict";
  Enabler.exit('HTML5_Background_Clickthrough');
  console.log("Exit code Initialized");
};

window.onload = function() {
  /* Initialize Enabler */
  if (Enabler.isInitialized()) {
    startAd();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, startAd);
  }
};
