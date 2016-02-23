// call animation function below
const animation = () => {

  // ANIMATION SETTINGS
  const timelineProgress = (position) => {
    console.log(`[custom] animation ${position}`);
  }
  const tl = new TimelineMax({
    repeat: 0,
    paused: true,
    yoyo: false,
    repeatDelay: 3,
    onStart: timelineProgress,
    onStartParams: ["start"],
    onComplete: timelineProgress,
    onCompleteParams: ["end"]
  });

  // IMPORT CONTROL MODULE
  ControlModule(tl);
  // ANIMATION CODE
  tl.addLabel("frame01")

  tl.staggerTo('[class^=box]', 0.25, {backgroundColor: "yellow"}, 0.1)
  tl.staggerTo('[class^=box]', 0.25, {backgroundColor: "lime"}, 0.1)
  tl.staggerTo('[class^=box]', 0.25, {backgroundColor: "blue"}, 0.1)
  tl.staggerTo('[class^=box]', 0.75, {x: 250, backgroundColor: "tomato"}, 0.25)

  // ANIMATION DURATION REPORTING
  console.log(`[custom] loop duration: ${tl.duration()}s`);
  console.log(`[custom] total duration: ${tl.totalDuration()}s`);
  // tl.seek("frame01")
  // .pause();
}
