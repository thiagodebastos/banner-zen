// ANIMATION CONTROLS MODULE
function ControlModule (tl) {
  const listen = (el, handler) => el.addEventListener("click", handler);
  const animationControls = document.getElementById("animationControls");
  const btnTypes = ['play', 'pause', 'resume', 'reverse', 'restart'];
  let btns = btnTypes.map(createBtn);

  // function to be mapped to btns array
  function createBtn(btnTxt){
    const newBtn = document.createElement("button");
    const t = document.createTextNode(btnTxt);
    newBtn.appendChild(t);
    return animationControls.appendChild(newBtn);
  }

  // listen to all the buttons
  listen(play_btn, playHandler);
  listen(pause_btn, pauseHandler);
  listen(resume_btn, resumeHandler);
  listen(reverse_btn, reverseHandler);
  listen(restart_btn, restartHandler);

  // control timeline with all the buttons
  function playHandler(){ tl.play();}
  function pauseHandler(){ tl.pause();}
  function resumeHandler(){ tl.resume();}
  function reverseHandler(){ tl.reverse();}
  function restartHandler(){ tl.restart();}
}
