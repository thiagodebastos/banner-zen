window.onload = function() {
	console.log('[custom] Window Loaded');
	if (Enabler.isInitialized()) {
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
}
function enablerInitHandler() {
	console.log('[custom] DCS Enabler Init');
	if (Enabler.isPageLoaded()) {
		pageLoadedHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
	}
}
function pageLoadedHandler() {
	console.log('[custom] Page Loaded');
	if (Enabler.isVisible()) {
		adVisibilityHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler);
	}
}
function adVisibilityHandler() {
	console.log('[custom] Ad Visible');
	document.getElementById('ad').addEventListener('click', bgExitHandler, false);

    animation();
}


function bgExitHandler(e) {
    Enabler.exit('Background Exit');
}