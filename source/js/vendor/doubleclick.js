// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

var adDiv;
// var exitBtn;

startAd = function(){

  adDiv = document.getElementById('ad');
  // exitBtn    = document.getElementById('background_exit_dc');
	addListeners();
}

addListeners = function (){
	adDiv.addEventListener('click', onExitHandler, false);
}

onExitHandler = function(e){
	Enabler.exit('HTML5_Background_Clickthrough');
}

window.onload = function() {
  /* Initialize Enabler */
  if (Enabler.isInitialized()) {
    startAd();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, startAd);
  }
}
