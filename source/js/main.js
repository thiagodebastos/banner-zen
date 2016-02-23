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

  // CONTROL MODULE FUNCTIOn
  ControlModule(tl);
  // ANIMATION CODE
  tl.addLabel("frame01")

  // ANIMATION CODE 

  // ANIMATION DURATION REPORTING
  console.log(`[custom] loop duration: ${tl.duration()}s`);
  console.log(`[custom] total duration: ${tl.totalDuration()}s`);
  // tl.seek("frame01")
  // .pause();
}
