//<![CDATA[
var key = window.location.href.split("go/")[1].replace("/","")
var urls={
    'fb':'https://www.facebook.com/downimekun',
    'Blog':"www.downimekun.net" /* yang terakhir tanpa koma */
}
if(key){
    if(urls[key]){
        window.location.href=urls[key]
    }else{
        document.write("'"+key+"' not found :(");
    }
}
//]]>