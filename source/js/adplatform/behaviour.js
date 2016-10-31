// NOTE: this file contains abstracted ad behaviour that applies across ad servers

// Show the ad. This is placed in the Enabler's polite load, or for a generic banner, in an onLoad handler
const show = () => {
  // Add your code to load creative assets or begin creative animation.
  animation()
  ControlModule()
}
