// Floor ad

function init(){
$(document).ready(function() {
  var extra_btn_1 = document.getElementById('extra_btn_1');

  $('.html_floor_ad').mouseenter(expand_the_ad);
  $('.html_floor_ad .ad_container').mouseenter(expand_the_ad);
  $('.html_floor_ad').mouseleave(collapse_the_ad);
  $('.html_floor_ad .expanded_state').mouseleave(collapse_the_ad);


  function expand_the_ad() {
    $('.html_floor_ad').css({'overflow':'visible'});
    $('.html_floor_ad .expanded_state').stop().animate({bottom:'262px'}, {duration: 500, easing: 'easeOutCubic'});
    $('.close_btn').click(close_the_ad);
        ADTECH.expand();
    return false;
  };

  function collapse_the_ad() {
    $('.html_floor_ad .expanded_state').stop().animate({bottom:'0px'}, {duration: 250, easing: 'easeOutCubic', complete: function(){ADTECH.contract();}});
    $('.html_floor_ad').css({'overflow':'hidden'});
    return false;
  };


  function close_the_ad() {
    $('.html_floor_ad').css({'overflow':'hidden'});
    $('.html_floor_ad').css({'visibility':'hidden', 'height':'0'});
    ADTECH.close();
    return false;
  };

  extra_btn_1.onclick = function(){
  ADTECH.click("extra_btn_1");
};

});
  }
setTimeout(function(){
  if(!window.ADTECH){
    setTimeout(arguments.callee,0);
    return;
  }
  ADTECH.ready(init);
},0);
