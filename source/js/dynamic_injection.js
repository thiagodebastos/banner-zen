var adWidth = '300';
var adHeight = '250';
var adPlatform = 'adwords';

switch (adPlatform) {
  case 'doubleclick':
    document.write('<script src="https://s0.2mdn.net/ads/studio/Enabler.js"></script>\
    <script src="js/vendor/doubleclick.js"></script>');
    break;

  case 'adwords':
    document.write('\
    <script src="https://tpc.googlesyndication.com/pagead/gadgets/html5/api/exitapi.js"></script>\
    <script src="js/vendor/adwords.js"></script>\
    <meta name="ad.size" content="width=' + adWidth + ',height=' + adHeight + '">')
    break;

  case 'sizmek':
    document.write('\
    <script src="http://ds.serving-sys.com/BurstingScript/adKit/adkit.js"></script>\
    <script src="js/vendor/sizmek.js"></script>');
    break;

  case 'adtech':
    document.write('\
    <script type="text/javascript" src="http://canvas.adtech.com/ads/jsapi/ADTECH.js"></script>\
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>\
    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>\
    <script src="http://api.html5media.info/1.1.6/html5media.min.js"></script>\
    <script src="js/vendor/adtech.js"></script>'
  );
    break;

  default:
    document.write('<!-- WARNING: An enabler is not being injected into this banner -->');
}
