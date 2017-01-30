//<![CDATA[
var rdnumposts=4;// Jumlah Post
var rdsnippet_length=0;var rdcurpost=[];var rdtotal_posts=0;var rdcurpost=new Array(rdnumposts);function totalposts(json){rdtotal_posts=json.feed.openSearch$totalResults.$t}document.write('<scr'+'ipt type="text/javascript" src="/feeds/posts/default/-/Anime?alt=json-in-script&max-results=0&callback=totalposts"></scr'+'ipt>');function getvalue(){for(var i=0;i<rdnumposts;i++){var found=false;var rndValue=get_random();for(var j=0;j<rdcurpost.length;j++){if(rdcurpost[j]==rndValue){found=true;break}};if(found){i--}else{rdcurpost[i]=rndValue}}};function get_random(){var ranNum=1+Math.round(Math.random()*(rdtotal_posts-1));return ranNum};
document.write('<ul class="downimekun">');
//]]>