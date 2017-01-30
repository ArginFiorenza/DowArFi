//<![CDATA[
$(window).bind("load resize", function(){
 var url = location.protocol+'//'+location.host+location.pathname;
  var containercm_width = $('#container-commentfb').width();
    $('#container-commentfb').html('<div class="fb-comments" ' +
    'data-href="'+url+'"' +
    ' width="' + containercm_width + '" data-num-posts="10"></div>');
    FB.XFBML.parse( );
  });
//]]>