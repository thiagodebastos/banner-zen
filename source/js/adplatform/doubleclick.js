if (Enabler.isInitialized()) {
  init()
} else {
  Enabler.addEventListener(studio.events.StudioEvent.INIT, init)
}

// Runs when Enabler is ready.
function init() {
  if (Enabler.isPageLoaded()) {
    show()
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, show)
  }
}

const bgExitHandler = (e) => Enabler.exit('Background Exit')

document.getElementById('ad').addEventListener('click', bgExitHandler, false)
