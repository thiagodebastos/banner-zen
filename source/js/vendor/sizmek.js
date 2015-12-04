var bgExit;

startAd = function() {
  "use strict";
  bgExit = document.getElementById("ad");
  addListeners();
  animation();
};

addListeners = function() {
  "use strict";
  document.getElementById("ad").addEventListener("click", onExitHandler);
};

onExitHandler = function(e) {
  "use strict";
  EB.onExitHandler();
  console.log('onExitHandler');
};

function userActionCounter() {
  EB.userActionCounter("CustomInteraction");
  console.log('custom interaction');
};

window.addEventListener("load", initEB);

function initEB() {
  if (!EB.isInitialized()) {
    EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
  } else {
    startAd();
  }
};
