/*<![CDATA[*/function saringtags(r,l){for(var e=r.split("<"),n=0;n<e.length;n++)-1!=e[n].indexOf(">")&&(e[n]=e[n].substring(e[n].indexOf(">")+1,e[n].length));return e=e.join(""),e=e.substring(0,l-1)}function relpostimgcuplik(r){for(var l=0;l<r.feed.entry.length;l++){var e=r.feed.entry[l];reljudul[relnojudul]=e.title.$t,postcontent="","content"in e?postcontent=e.content.$t:"summary"in e&&(postcontent=e.summary.$t),relcuplikan[relnojudul]=saringtags(postcontent,numchars),"media$thumbnail"in e?postimg=e.media$thumbnail.url:postimg="http://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s1600/grey.GIF",relgambar[relnojudul]=postimg;for(var n=0;n<e.link.length;n++)if("alternate"==e.link[n].rel){relurls[relnojudul]=e.link[n].href;break}relnojudul++}}function contains(r,l){for(var e=0;e<r.length;e++)if(r[e]==l)return!0;return!1}function artikelterkait(){for(var r=new Array(0),l=new Array(0),e=new Array(0),n=new Array(0),t=0;t<relurls.length;t++)contains(r,relurls[t])||(r.length+=1,r[r.length-1]=relurls[t],l.length+=1,l[l.length-1]=reljudul[t],e.length+=1,e[e.length-1]=relcuplikan[t],n.length+=1,n[n.length-1]=relgambar[t]);reljudul=l,relurls=r,relcuplikan=e,relgambar=n;for(var t=0;t<reljudul.length;t++){var a=Math.floor((reljudul.length-1)*Math.random()),u=reljudul[t],i=relurls[t],o=relcuplikan[t],s=relgambar[t];reljudul[t]=reljudul[a],relurls[t]=relurls[a],relcuplikan[t]=relcuplikan[a],relgambar[t]=relgambar[a],reljudul[a]=u,relurls[a]=i,relcuplikan[a]=o,relgambar[a]=s}for(var g,m=0,d=Math.floor((reljudul.length-1)*Math.random()),c=d,h=document.URL;relmaxtampil>m&&(relurls[d]==h||(g="<li class='news-title clearfix'>",g+="<a href='"+relurls[d]+"' rel='nofollow' target='_top' title='"+reljudul[d]+"'><div class='overlayb'><img src='"+relgambar[d]+"' /></div></a>",g+="<div class='overlaytext'><a class='relinkjdulx' href='"+relurls[d]+"' target='_top'>"+reljudul[d]+"</a></div>",g+="<span class='news-text'>"+relcuplikan[d]+"</span>",g+="</li>",document.write(g),m++,m!=relmaxtampil))&&(d<reljudul.length-1?d++:d=0,d!=c););}var relnojudul=0,relmaxtampil=6,numchars=90,reljudul=new Array,relurls=new Array,relcuplikan=new Array,relgambar=new Array;
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1 5(a,b,c){$(a).7(1(){$(0).4({\'3\':$(0).4(\'3\').6(\'/2\'+b+\'-c/\',\'/2\'+c+\'-c/\'),\'8\':c,\'9\':c})})}',13,13,'this|function|s|src|attr|resizeThumb|replace|each|width|height|||'.split('|'),0,{}))/*]]>*/