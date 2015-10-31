$(document).ready(function() {
  // check if element exists and return a boolean value
  // http://stackoverflow.com/a/5629730

  if (!!document.getElementById('ad')) {
    console.log('this is a sizmek ad');
  } else if (!!document.getElementById('container_dc')) {
    console.log('this is a doubleclick ad');
  }
  
});
