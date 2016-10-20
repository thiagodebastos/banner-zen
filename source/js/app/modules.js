// ANIMATION CONTROLS MODULE
// ******************************************************
// NOTE: This module will be injected into
// <div id="animationControls"></div>
// It can be used during development and will not cause
// issues in production as it exists outside of the iframe
// and will not be rendered.
//
// Expanding Banners:
// If being used with an expanding banner, make sure to
// set the top property to 500px (or any other height)
// upon expand.
//
// Styling:
// #animationControls
//   position relative
//   top $banner_height
//   width $banner_width
//   height 30px
//   background white
//   z-index 10000
//   text-align center
//   button
//     position relative
//     border none
//     width 55px
//     height 30px
//     background-color white
// ******************************************************

function ControlModule () {
  const listen = (el, handler) => el.addEventListener("click", handler);
  const animationControls = document.getElementById("animationControls");
  const btnTypes = ['play', 'pause', 'resume', 'reverse', 'restart'];
  const btns = btnTypes.map(createBtn);


  // function to be mapped to btns array
  function createBtn(btnTxt){
    const newBtn = document.createElement("button");
    const t = document.createTextNode(btnTxt);
    newBtn.appendChild(t)
    newBtn.setAttribute("id", `${btnTxt}_btn`);
    return animationControls.appendChild(newBtn);
  }

  // listen to all the buttons
  listen(play_btn, playHandler);
  listen(pause_btn, pauseHandler);
  listen(resume_btn, resumeHandler);
  listen(reverse_btn, reverseHandler);
  listen(restart_btn, restartHandler);



  // control timeline with all the buttons
  function playHandler(){ animation.tlMain.play();}
  function pauseHandler(){ animation.tlMain.pause();}
  function resumeHandler(){ animation.tlMain.resume();}
  function reverseHandler(){ animation.tlMain.reverse();}
  function restartHandler(){ animation.tlMain.restart();}
}
