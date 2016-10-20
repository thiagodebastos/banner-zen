// /**
//  * Abstract class for a single frame within a HTML5 canvas/js banner.
//  */
// (function(scope) {
// 	console.log('Frame');
// 	/**
// 	 * Constructor.
// 	 */
// 	function Frame() {
// 		createjs.Container.apply(this); // Ensures frame classes don't share the same base container
// 	}
//
// 	// public
//
// 	/**
// 	 * Use Container as base class.
// 	 */
// 	var p = Frame.prototype = new createjs.Container();
//
// 	// Components
// 	p.headline;
//
// 	// Constants
// 	p.TWEEN_INCREMENT = 0.25;
// 	p.IMAGE_URL = "img/";
// 	p.PADDING = 10;
//
// 	/**
// 	 * Create a new bitmap asset from an external image source, and trigger a callback once the image has loaded.
// 	 */
// 	p.initBitmapImage = function(imageName, callback) {
// 		var image = new Image();
// 			image.src = this.IMAGE_URL + imageName;
//
// 		var bitmap = new createjs.Bitmap(image);
//
// 		// Once the image has loaded, trigger callback if provided. Usually this is used to set the regX/regY points.
// 		image.onload = function() {
// 			if (callback) callback(bitmap);
// 		};
// 		return bitmap;
// 	};
//
// 	/**
// 	 * Init the main headline per id which is passed by the unique frame classes.
// 	 */
// 	p.initHeadline = function(id, x, y) {
// 		this.headline = this.createHeadline(id,x,y);
// 		this.addChild(this.headline);
// 	};
//
// 	/**
// 	 * Create a headline piece.
// 	 */
// 	p.createHeadline = function(id, x, y) {
// 		var headline = 	this.initBitmapImage("headline"+id+".png", this.centrePointRegister);
// 			headline.x = x;
// 			headline.y = y;
//
// 		return headline;
// 	};
//
// 	/**
// 	 * Starts the animation content.
// 	 */
// 	p.start = function() {
// 		// this.animateInBack(this.someGlobalAsset);
// 		// override me
// 	};
//
// 	/**
// 	 * Ends the animation content.
// 	 */
// 	p.end = function() {
// 		//this.animateOutBack(this.someGlobalAsset);
// 		// override me
// 	};
//
// 	/**
// 	 * Set a bitmap's registration point to the centre.
// 	 */
// 	p.centrePointRegister = function(bitmap) {
// 		bitmap.regX = bitmap.image.width>>1;
// 		bitmap.regY = bitmap.image.height>>1;
// 		return bitmap;
// 	};
//
// 	/**
// 	 * Get the Banner class for manipulation of global assets from individual frames.
// 	 */
// 	p.root = function() {
// 		return this.parent.parent;
// 	};
//
// // tween utils
//
// 	/**
// 	 * Standard back tween for any bitmap object.
// 	 */
// 	p.animateInBack = function(bitmap, delay) {
// 		bitmap.scaleX = bitmap.scaleY = 0.75;
// 		bitmap.alpha = 0;
//
// 		TweenLite.to(bitmap, this.TWEEN_INCREMENT*4, {delay:delay, scaleX:1, scaleY:1, alpha:1, ease:Back.easeOut, onStart:this.animationStart, onStartScope:this, onStartParams:[bitmap]});
// 	};
//
// 	/**
// 	 * Standard back tween for any bitmap object.
// 	 */
// 	p.animateOutBack = function(bitmap, delay) {
// 		TweenLite.to(bitmap, this.TWEEN_INCREMENT*4, {delay:delay, scaleX:0.75, scaleY:0.75, alpha:0, ease:Back.easeIn, onStart:this.animationStart, onStartScope:this, onStartParams:[bitmap]});
// 	};
//
// 	/**
// 	 * Standard fade in for any bitmap object.
// 	 */
// 	p.fadeIn = function(bitmap, delay) {
// 		bitmap.alpha = 0;
// 		TweenLite.to(bitmap, this.TWEEN_INCREMENT*4, {delay:delay, alpha:1, onStart:this.animationStart, onStartScope:this, onStartParams:[bitmap]});
// 	};
//
// 	/**
// 	 * Standard fade out for any bitmap object.
// 	 */
// 	p.fadeOut = function(bitmap, delay) {
// 		TweenLite.to(bitmap, this.TWEEN_INCREMENT*4, {delay:delay, alpha:0});
// 	};
//
// 	/**
// 	 * Standard horizontal slide animation.
// 	 */
// 	p.slideHorizontally = function(asset, amount, delay, time) {
// 		var toX = asset.x;
//
// 		asset.x -= amount;
// 		asset.visible = true;
//
// 		if (!time) time = this.TWEEN_INCREMENT*2;
//
// 		TweenLite.to(asset, time, {delay:delay, x:toX, ease:Sine.easeOut, onStart:this.animationStart, onStartScope:this, onStartParams:[asset]});
// 	};
//
// 	/**
// 	 * Standard vertical slide animation.
// 	 */
// 	p.slideVertically = function(asset, amount, delay, time) {
// 		var toY = asset.y;
//
// 		asset.y -= amount;
//
// 		if (!time) time = this.TWEEN_INCREMENT*2;
//
// 		TweenLite.to(asset, time, {delay:delay, y:toY, ease:Sine.easeOut, onStart:this.animationStart, onStartScope:this, onStartParams:[asset]});
// 	};
//
// 	p.animationStart = function(asset) {
// 		asset.visible = true;
// 	};
//
// 	/**
// 	 * Shorthand method to create a delayed method.
// 	 */
// 	p.wait = function(time, callback) {
// 		TweenLite.delayedCall(time, callback, null, this);
// 	};
//
// 	scope.Frame = Frame;
//
// }(window));
