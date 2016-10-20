// /**
//  * STG1532_10Gaming_300x50 - Frame 1.
//  */
// (function(scope) {
//     console.log('Frame1');
//     /**
//      * Constructor.
//      */
//     function Frame1() {
//         // Backgrounds
//
//         // Original
//         this.bg = this.initBitmapImage("bg.jpg");
//         this.addChild(this.bg);
//
//         // Headline
//         this.initHeadline(1,Banner.WIDTH>>1,450);
//     }
//
//     // public
//
//     /**
//     * Use Frame as base class.
//     */
//
//     var p = Frame1.prototype = new Frame();
//
//     // Components
//     p.bg;
//     p.tcs;
//     p.copy;
//
//     /**
//      * Starts the animation content.
//      */
//     p.start = function() {
//         console.log('p.start');
//         this.bg.alpha = 1;
//
//         this.animateInBack(this.headline);
//
//         // Disclaimer
//         this.fadeIn(this.tcs);
//     };
//
//     p.end = function() {
//         this.bg.visible = false;
//     };
//     cope.Frame1 = Frame1;
// });
