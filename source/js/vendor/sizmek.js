function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd() {
    const adDiv = document.getElementById("ad");
    addEventListeners();
    console.log('[custom] ad initialised');
    animation();
}

function addEventListeners() {
    document.getElementById("ad").addEventListener("click", clickthrough);
}

function clickthrough() {
    EB.clickthrough();
    console.log('[custom] Clickthrough Initiated');

}


window.addEventListener("load", initEB);
