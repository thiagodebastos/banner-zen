var adDiv;

function initEB() {
  if (!EB.isInitialized()) {
    EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
  } else {
    startAd();
  }
}

function startAd() {
  adDiv = document.getElementById("banner");

  addEventListeners();
  animation();

}

function addEventListeners() {
  document.getElementById("banner").addEventListener("click", clickthrough);
  //document.getElementById("user-action-button").addEventListener("click", userActionCounter);
}

function clickthrough() {
  EB.clickthrough();
  console.log('clickthrough');
}

function userActionCounter() {
  EB.userActionCounter("CustomInteraction");
  console.log('custom interaction');
}

window.addEventListener("load", initEB);
