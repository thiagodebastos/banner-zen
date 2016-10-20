/**
 * HTML5 banner main initialisation threshold.
 */
let bannerStage;
let bannerCreative;

function init() {
	bannerStage = new createjs.Stage(document.getElementById("bannerCanvas"));
	// bannerCreative = new Banner();

	// bannerStage.addChild(bannerCreative);

	createjs.Ticker.setFPS(25);
	createjs.Ticker.addEventListener("tick",handleTick);
}

function handleTick() {
	bannerStage.update();
}
