// /**
//  * KCA1520_DryNites_160x600!.
//  */
// (function(scope) {
//
// 	// If infinite looping is false, this is how many times the banner will play
// 	var MAX_LOOPS = 1;
//
// 	/**
// 	 * Constructor.
// 	 */
// 	function Banner() {
//
// 	// private
//
// 		// Tracks what frame we're currently viewing
// 		var onFrame = 0;
//
// 		// Tracks how many times the banner has played
// 		var loopCount = 0;
//
// 		// Boolean to set whether we play forever, or loop up to the 'MAX_LOOP' count
// 		var infiniteLooping = false;
//
// 		// Contains the individual frames for easy swap outs
// 		var frameContainer = new createjs.Container();
//
// 		// Store each instance of every frame here
// 		var frames = [new Frame1(),new Frame2(),new Frame3()];
// 		var frame;
//
// 		// The time each frame waits before proceeding to the next (in seconds)
// 		var delays = [6,11,6];
//
// 		// The time eaach frame has for its "end animation" sequence before moving to the next frame
// 		var ends = [2,1,1];
//
// 		/**
// 		 * Init. Add the static background and create frame container. Initialise first frame.
// 		 */
// 		this.init = function() {
// 			this.initBG();
//
// 			this.addChild(frameContainer);
//
// 			this.initGlobalAssets();
// 			this.initFrame();
// 		};
//
// 		/**
// 		 * Init background to be shared across all frames except frame 1.
// 		 */
// 		this.initBG = function() {
// 			this.background = new createjs.Bitmap("img/bg.jpg");
// 			this.background.x = this.background.regX = Banner.WIDTH>>1;
// 			this.background.y = this.background.regY = Banner.HEIGHT>>1;
// 			this.background.visible = false;
// 			this.addChild(this.background);
// 		};
//
// 		/**
// 		 * Init assets requiring presents across multiple frames.
// 		 */
// 		this.initGlobalAssets = function() {
// 			this.globalEffects = new createjs.Container();
// 			this.globalEffects.visible = false;
// 			// // Wisps
// 			// var wisp;
// 			// var wispCoords = [[20,100],[250,40],[200,76],[255,10],[5,13],[100,45],[33,200],[220,133],[244,210],[275,70],[153,24],[90,195],[250,150]];
//             //
// 			// for (var i = 0; i<wispCoords.length; i++) {
// 			// 	wisp = new Wisp();
// 			// 	wisp.x = wispCoords[i][0];
// 			// 	wisp.y = wispCoords[i][1];
// 			// 	wisp.play();
// 			// 	this.globalEffects.addChild(wisp);
// 			// }
//             //
// 			// // Sun rays
// 			// var rays = new createjs.Bitmap("images/rays.png");
// 			// 	rays.x = -50;
// 			// var raysPulse = new Pulse(rays);
// 			// 	raysPulse.beginPulse();
//             //
// 			// this.globalEffects.addChild(rays);
// 			this.addChildAt(this.globalEffects,1);
// 		};
//
// 		/**
// 		 * Display the next due frame using the session, and remove any current frames.
// 		 */
// 		this.initFrame = function() {
// 			frameContainer.removeAllChildren();
//
// 			// Start the frame
// 			frame = frames[onFrame];
// 			frameContainer.addChild(frame);
// 			frame.start();
//
// 			// Get delay before iterating onFrame
// 			var delay = delays[onFrame];
// 			var endTime = ends[onFrame];
//
// 			// Cycle session before next frame iteration
// 			if (++onFrame >= frames.length) {
// 				onFrame = 0;
// 				loopCount++;
// 			}
//
// 			// Prepare to iterate through the next frame, or stay put depending on looping sessions
// 			if (!infiniteLooping) {
// 				if (loopCount < MAX_LOOPS) this.queueNextFrame(delay,endTime);
// 			} else {
// 				this.queueNextFrame(delay,endTime);
// 			}
// 		};
//
// 		/**
// 		 * Ready the next frame in the queue.
// 		 */
// 		this.queueNextFrame = function(delay, endTime) {
// 			// Current frame has queued end-animation sequence
// 			TweenLite.delayedCall(delay - endTime, frame.end, null, frame);
// 			// Next frame will be initialised after 'END_FRAME_ANIM_TIME' time
// 			TweenLite.delayedCall(delay, this.initFrame, null, this);
// 		};
//
// 		// Start
// 		this.init();
// 	}
//
// // public
//
// 	/**
// 	 * Use Container as base class.
// 	 */
// 	var p = Banner.prototype = new createjs.Container();
//
// 	// Assets
// 	p.globalEffects;
//
// 	// Public Constants
// 	Banner.WIDTH = 300;
// 	Banner.HEIGHT = 50;
//
// 	scope.Banner = Banner;
//
// }(window));
