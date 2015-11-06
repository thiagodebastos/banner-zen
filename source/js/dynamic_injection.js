var adWidth = 300;
var adHeight = 250;
var adwords = true;
var adPlatform = '';
document.write('<meta name="ad.size" content="width=' + adWidth + ',height=' + adHeight + '">')

switch (adPlatform) {
  case 'doubleclick':
    document.write('<script src="https://s0.2mdn.net/ads/studio/Enabler.js"></script>');
    document.write('<script src="js/vendor/doubleclick.js"></script>');
    break;

  case 'adwords':
    document.write('<script src="https://tpc.googlesyndication.com/pagead/gadgets/html5/api/exitapi.js"></script>');
    document.write('<script src="js/vendor/adwords.js"></script>');
    break;

  case 'sizmek':
    document.write('<script src="http://ds.serving-sys.com/BurstingScript/adKit/adkit.js"></script>');
    document.write('<script src="js/vendor/sizmek.js"></script>');
    break;

  default:
    document.write('<!-- WARNING: An enabler is not being injected into this banner -->');
}
