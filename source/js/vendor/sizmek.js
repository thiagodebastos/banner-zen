var adDiv;

adkit.onReady(startAd);

function startAd() {
    adDiv = document.getElementById("ad");

    addEventListeners();
}

function addEventListeners() {
    document.getElementById("clickthrough-button").addEventListener("click", clickthrough);
    document.getElementById("user-action-button").addEventListener("click", userActionCounter);
}

function clickthrough() {
    EB.clickthrough();
}

function userActionCounter() {
    EB.userActionCounter("CustomInteraction");
}

window.addEventListener("load", initEB);