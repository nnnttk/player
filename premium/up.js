
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}

function gayaasli(){
var gayanya = Base64.decode("PHN0eWxlPgoqIHsgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTt9CQpib2R5e21hcmdpbjowfSAgCiNyZXN1bHQtY29udGFpbmVyIHt3aWR0aDoxMDAlO2hlaWdodDo0ODBweDtwb3NpdGlvbjpyZWxhdGl2ZTt9CQojcmVzdWx0LWNvbnRhaW5lciBpZnJhbWUge3dpZHRoOjEwMCUgIWltcG9ydGFudDtoZWlnaHQ6NDgwcHggIWltcG9ydGFudDttYXgtaGVpZ2h0OjEwMCV9CiNlbWJjZCB7cG9zaXRpb246IGZpeGVkO3dpZHRoOiAxMDAlO2hlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTt0b3A6IDI3cHg7YmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtjb2xvcjogIzE2OGIxZTtmb250LWZhbWlseTogbW9ub3NwYWNlO2ZvbnQtc2l6ZTogMjBweDtwYWRkaW5nOiAxMDBweDt0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O30KLnRoaXNtYWluIHsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgIHdpZHRoOiAxMDAlOwp9Ci5lbWJlZC1jb3B5LW1zZyB7cG9zaXRpb246IGZpeGVkO3RvcDogMTIwcHg7YmFja2dyb3VuZC1jb2xvcjogIzAwZmYyZTtjb2xvcjogIzJiMmIyYjt3aWR0aDogMTAwJTt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZzogOTBweCAwcHg7Zm9udC1zaXplOiA0MHB4O3RyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7fQoubXVhdCB7d2lkdGg6MTAwcHg7aGVpZ2h0OjEwMHB4O21hcmdpbjogMDtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiA1MCU7bGVmdDogNTAlOy1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9ibG9nZ2VyLmdvb2dsZXVzZXJjb250ZW50LmNvbS9pbWcvYi9SMjl2WjJ4bC9BVnZYc0VoZkZSTy1pRTByaDhJRHphN2huMXBDNWgyN0M1U3hJZHVNekFRWFJiazJiMm5ZNnZoUWN2RlVZbjNObGhnRnVxWEt0RWxjMGVDMXg4RFpuUkJTazJPQ0d3VVBwanMzRTA3ZVJxdEZuNVo3SDZhQkVESDVqY1BYeEZFSUtXUjRJMk52V01XMmRmemhMQ0RUN056RUhaQzZrQ1VESUtNa1lWSlltaWxqdE56UmRIOHFmODFHS0I3ZnZMZm4vczEwMC1ydy9sb2FkaW5nLmdpZik7fQkKLm5vbnRvbiB7d2lkdGg6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO30gIAouc29jaW5ldHcgeyBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCByZ2IoMCAwIDAgLyAyMCUpOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO30KLnNvY2luZXR3IGEge3RleHQtZGVjb3JhdGlvbjpub25lfQouc29jaW5ldHcgYTpob3ZlciB7dHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtvcGFjaXR5OiAwLjg7fQkKLm5hdmlnYXNpIHsKICAgIHdpZHRoOiAxMDAlOwogICAgaGVpZ2h0OiA0OHB4OwogICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMGYwZjsKICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTE1MTUxOwogICAgYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggcmdiKDAgMCAwIC8gMjAlKTsKICAgIHotaW5kZXg6IDM7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICBvdmVyZmxvdzogaGlkZGVuOwp9Ci5sb2dvIGltZyB7CiAgICBoZWlnaHQ6IDMwcHg7CiAgICBtYXJnaW46IDlweDsKICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7Cn0JCi5zb2NpbmV0dyBhIGltZyB7CiAgICBtYXJnaW4tdG9wOiA0cHg7Cn0KI0xpc3RQYXJ0IGRpdiB7Ym94LXNpemluZzpib3JkZXItYm94OyBwYWRkaW5nOjEwcHggMHB4IDBweCAxMHB4fQkKQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHsKI2Fkc3RyciB7cG9zaXRpb246IHJlbGF0aXZlO21hcmdpbi10b3A6NTY1cHh9Ci5ub250b24sIC5zb2NpbmV0dywjYWRzdHJyIHt3aWR0aDo3NSUgIWltcG9ydGFudH0KI0xpc3RQYXJ0IHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyMy4zJTt0b3A6NDVweDtyaWdodDoxMHB4fQkKI0xpc3RQYXJ0IGltZyB7Ym9yZGVyLXJhZGl1czozJX0KfQkKQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHsKICAjcmVzdWx0LWNvbnRhaW5lciB7CiAgICBoZWlnaHQ6MjAwcHggIWltcG9ydGFudDsKICB9CQogICNkaXZhZHN0cnIge21hcmdpbi10b3A6IDI4NXB4O30JCiAgLnRoaXNtYWluIHsKICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgIHdpZHRoOiAxMDAlOwogICAgdG9wOiAwcHg7CiAgICBsZWZ0OiAwcHg7CiAgICB6LWluZGV4OiAxOwogIH0JCn0KdWwgewogICAgcGFkZGluZzogMDsKICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsKfQoKI0xpc3RQYXJ0IGltZyB7d2lkdGg6MTAwJX0KLmpkbFBhcnQgewogICAgd2lkdGg6MTAwJTsKICAgIGhlaWdodDo1MHB4OwogICAgYmFja2dyb3VuZDojZWVlOwogICAgbWFyZ2luOjBweCAwcHggMjBweCAwOwp9CQouZW1iZEJUTiwgI2hpc3RhdHNDe2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fQkKYTp2aXNpdGVkIHsgY29sb3I6ICMwMDA7IH0JCjwvc3R5bGU+IAk=");
var aslinya = Base64.decode("PGRpdiBjbGFzcz0ndGhpc21haW4nPgkKPG5hdiBjbGFzcz0nbmF2aWdhc2knPgoJPHNwYW4gY2xhc3M9J2xvZ28nPjxpbWcgc3JjPScuLi9pL3d0ZnR1YmUuanBnJyBhbHQ9J1dURlRVQkUgTG9nbycgLz48L3NwYW4+Cgk8c3BhbiBjbGFzcz0nc29jaWFsJz48L3NwYW4+CjwvbmF2PgkgCjxkaXYgc3R5bGU9InBvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCUiPgo8ZGl2IGNsYXNzPSJub250b24iPjxkaXYgaWQ9InJlc3VsdC1jb250YWluZXIiPjxkaXYgY2xhc3M9Im11YXQiPjwvZGl2PjwvZGl2PjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0ic29jaW5ldHciIHN0eWxlPSIgd2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IGNlbnRlcjsiPiAKCTxhIGhyZWY9Imh0dHBzOi8vZmFjZWJvb2suY29tL2FuaW1lbW9udG9rIj4KCQk8aW1nIHN0eWxlPSJ3aWR0aDogMzIlO21heC1oZWlnaHQ6MjhweDttYXgtd2lkdGg6IDEyMXB4OyIgc3JjPSJodHRwczovL2Jsb2dnZXIuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2ltZy9iL1IyOXZaMnhsL0FWdlhzRWhJMXhzaVVocE16eGVuTUNGSko1djlyNEwxaWttMzd4ZkoyREFmdk5IRFY2ZFpzbFhUTm5jYzdieGZmVE9DRHpJdXdELXJtSXVoeW5KdTg0enRsbkxMUVhrdUdBakI4S21aVlZJWlJsQTE1Q1BHSERPZGJvMWt3eE1NYXNqQjlaZUtBQkFTLW8yaFp5a211Q3Rxcl9FcXA0SmRyWFc4UkhBOFFaVWdFV1RXck10TGRzSGx0WFpsdFhmby9zMC1ydy9mYi1idXR0b24ucG5nIi8+Cgk8L2E+IAoJPGEgaHJlZj0iaHR0cHM6Ly90d2l0dGVyLmNvbS9kbmlpaGVuIj4KCQk8aW1nIHN0eWxlPSJ3aWR0aDogMzIlO21heC1oZWlnaHQ6MjhweDttYXgtd2lkdGg6IDEyMXB4OyIgc3JjPSJodHRwczovL2Jsb2dnZXIuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2ltZy9iL1IyOXZaMnhsL0FWdlhzRWpZdjNKRmRfV2JZb21PS3JiMVVyMUpDR1FJSldOTzVHdVVjVlFmSVVlSWNXekh4WTJIV3NPcWdrQ3hpNjJMWUxWU1VaRGxiU1daTlJXMFp1a2wtTldkd2xZNnB1N3VudzRWd25QTjhPbU5DRVZ5OXBld1BvQU1sd3Q1X3JDd1JGMUN6N3VfZTFQUU5vWUZHcFV4V2FFQm1vT3c1MWx3YktyUEk3VFRqSnZ0QU51TDAwRUZfNjdNaGt2Zy9zMC1ydy90d3QtYnV0dG9uLnBuZyIvPgoJPC9hPiAKCTxhIGhyZWY9Imh0dHBzOi8vdC5tZS9ibG9nbWVhdDIiPgoJCTxpbWcgc3R5bGU9IndpZHRoOiAzMiU7bWF4LWhlaWdodDoyOHB4O21heC13aWR0aDogMTIxcHg7IiBzcmM9Imh0dHBzOi8vYmxvZ2dlci5nb29nbGV1c2VyY29udGVudC5jb20vaW1nL2IvUjI5dloyeGwvQVZ2WHNFaGY0b20wUmJKV0F4SVlMcHdmdkd5bFhmakc5eXR3SV9MMGlNaTIwRWxUOGFleFp3TFhMbFVNSXFBT2wxVlFmUWFlQ3o2aTdBODI4N21VUUlkdXcway1PckQ5OG5OeW5BR1dYWHZkLS1BRXZwU1VLVUN6VGJXbGVSekdwR3FycFh3cFJ0REpNMU9OdlE4R0xHcFJ5X0d5TWEtREdUT1phSEVGQzNrRjVUOHYtRk9qZ1VWajZSRlR6QUNwL3MwLXJ3L3RnLWJ1dHRvbi5wbmciLz4KCTwvYT4gCjwvZGl2PgkgCQo8L2Rpdj4KPGRpdiBpZD0nZGl2YWRzdHJyJz4JCjxkaXYgaWQ9Ikxpc3RQYXJ0Ij48L2Rpdj4JCjwvZGl2Pg==");
document.getElementById('maindspl').innerHTML = gayanya+aslinya;
}

var 	urlasli = window.location.href,
	tmbkd = "ltYVd4bGN5MW5iMjluYkdVdFkyOWtaUzFtYjNJdGJYa3RjekJqYVdGc0xXMWxaR2xoTG1Kc2IyZHpjRzkwTG1OdmJTOW1aV1ZrY3k5d2IzTjBjeTlrWldaaGRXeDBMe",
	tmbkd2 = "lxY3k1dGIzWnBaV3gxWTJzdWJXd3ZabVZsWkhNdmNHOXpkSE12WkdWbVlYVnNkQz",
	penyederhanaan = urlasli.replace(tmbkd,"###").replace(/.+###/,"###").replace(/###.+/,"###"),
	konting = urlasli.replace("?m=1#","#YUhSMGNITTZMeT");

var hAnime = urlasli.includes(tmbkd2);
if (penyederhanaan != "###") {if(hAnime == true){var urlf = konting} else {var urlf = urlasli.replace("?m=1#","#YUhSMGNITTZMeT"+tmbkd)}}else{var urlf = konting}
//console.log(urlf);

var  	ufeeds = urlf.replace(/.+#/,""),
	feeds = Base64.decode(ufeeds),
	feed = Base64.decode(feeds),
	fee = feed.replace("@",Base64.decode("LmJsb2dzcG90LmNvbS9mZWVkcy9wb3N0cy9kZWZhdWx0Lw==")),
	idnonton = urlasli.replace(/.+?m=1#/,"");

if (urlf != urlasli) {

function nobars(json) {

    // Poor configuration settings, develop them yourself!
    var config = {
			containerID: 'result-container', // Container ID to show the generated data
			embedc: 'embed-code', // Container ID to show the generated embed-code
			noSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIAQMAAABvIyEEAAAABGdBTUEAALGPC/xhBQAAAAZQTFRFOjo6JycnNkxyjQAAADZJREFUKM9j+A8DDFRnNTCAACP9WewPGNgfkMmiwN7GH0CGfCPdWZT5V/7/DwZyWeSHFa1SHQDDGF2E0US40gAAAABJRU5ErkJggg=='
				},
		d = document, container = d.getElementById(config.containerID),
		emdc = d.getElementById(config.embedc);

    // No container found
    if (!container) { alert('Container not found.');return; }

    var post = json.entry, // The post/page object
        postContent = post.content ? post.content.$t : post.summary.$t.replace(/<br *\/?>|[\s]+/gi, ' ').replace(/<.*?>|[<>]/g, ""), // The post/page content
    // Trying to get the iframe src URL from post/page content
		iframeContent = /<iframe +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?>/i.exec(post.content.$t),
        iframeSrc = iframeContent && iframeContent[3] ? iframeContent[3] : config.noSrc;
	
	//console.log(iframeSrc);
	//console.log(iframeContent[0]);
	container.innerHTML = iframeContent;
	
	try {
		var vparts = post.category[0].term, BvID = post.id.$t.replaceAll('.','@').replaceAll('-','#').replace(/.+blog#/,'').replace(/@post#.+/,'');
	    	var ngeList = document.createElement('script'); ngeList.src = Base64.decode("aHR0cHM6Ly93d3cuYmxvZ2dlci5jb20vZmVlZHMv")+BvID+Base64.decode("L3Bvc3RzL2RlZmF1bHQvLS8=")+vparts+Base64.decode("P2FsdD0=")+"json"+Base64.decode("JmNhbGxiYWNrPQ==")+"plst"; document.getElementsByTagName('head')[0].appendChild(ngeList);	
	    }
	catch(err) {}
	
}
	

	
var script = document.createElement('script');
var gntMVL = fee 	.replace(Base64.decode("YXM2NGQ5OHdydzUyMTN0MTQ2NTUxZDIzZjF2c2QzMWYyLmJsb2dzcG90LmNvbQ=="),Base64.decode("anMubW92aWVsdWNrLm1s"))
			.replace(Base64.decode("ZmlsZXMtZ29vZ2xlLWNvZGUtZm9yLW15LXMwY2lhbC1tZWRpYS5ibG9nc3BvdC5jb20="),Base64.decode("anMuaWRibG9nLmV1Lm9yZw=="))+
	     Base64.decode("P2FsdD0=")+"json"+Base64.decode("JmNhbGxiYWNrPQ==")+"nobars";
script.src = gntMVL;

document.getElementsByTagName('head')[0].appendChild(script); 

//console.log(feed);

$(document).ready(function(){
	$('.nonton').each(function(){ 
		$(this).attr("id", idnonton); 
	});
});

}else{window.location="/home"} 
var hrfAkhr = urlasli.slice(-1), hrfAkhrIt_9 = hrfAkhr.replace("9","$"), hrfAkhrIt_smdg = hrfAkhrIt_9.replace("=","$");
if (urlasli == urlasli.replace(/#.+/,"#")){window.location="/home"} 
if (hAnime == false){ if (hrfAkhrIt_smdg != "$"){window.location="/home"} }



function plst(json) {
	var config = { noSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIAQMAAABvIyEEAAAABGdBTUEAALGPC/xhBQAAAAZQTFRFOjo6JycnNkxyjQAAADZJREFUKM9j+A8DDFRnNTCAACP9WewPGNgfkMmiwN7GH0CGfCPdWZT5V/7/DwZyWeSHFa1SHQDDGF2E0US40gAAAABJRU5ErkJggg==' }
	var endata = json.feed.entry, othrPrt = "";
	for (var i = 0; i < endata.length; i++) {
		var title = endata[i].title.$t,
			url = endata[i].link.pop().href,
			imgContent = /<img +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?>/i.exec(endata[i].content.$t),
			imgSrc = imgContent && imgContent[3] ? imgContent[3] : config.noSrc,
			urlf = endata[i].link[0].href,
			stw = urlf.replace(/feed.+default/,""),
			urlfe = urlf.replace("/comments/default",""),
			urlfee = urlfe.replace(Base64.decode("LmJsb2dzcG90LmNvbS9mZWVkcy8="),"@").replace(Base64.decode("d3d3LmJsb2dnZXIuY29tL2ZlZWRzLzc5MTk1MDYwMDMzNDY3MjAzOQ=="),Base64.decode("ZmlsZXMtZ29vZ2xlLWNvZGUtZm9yLW15LXMwY2lhbC1tZWRpYS5ibG9nc3BvdC5jb20vZmVlZHM=")).replace(Base64.decode("ZHJhZnQuYmxvZ2dlci5jb20vZmVlZHMvNzkxOTUwNjAwMzM0NjcyMDM5"),Base64.decode("ZmlsZXMtZ29vZ2xlLWNvZGUtZm9yLW15LXMwY2lhbC1tZWRpYS5ibG9nc3BvdC5jb20vZmVlZHM=")),
			urlfeed = Base64.encode(urlfee),
			ktn = Base64.encode(urlfeed).replace("YUhSMGNITTZMeTltYVd4bGN5MW5iMjluYkdVdFkyOWtaUzFtYjNJdGJYa3RjekJqYVdGc0xXMWxaR2xoTG1Kc2IyZHpjRzkwTG1OdmJTOW1aV1ZrY3k5d2IzTjBjeTlrWldaaGRXeDBMe","%"), pgntn = "p/stream.html?m=1#";
		var imgSrcEnc = encodeURIComponent(imgSrc).replace("https%3A%2F%2F","").split("%2F"), imgBlggr = 'blogger.googleusercontent.com/img/'; if(imgSrc.includes(imgBlggr) == true){ var imgSrcFix = 'https://dl.kaskus.id/'+imgBlggr+imgSrcEnc[2]+'/'+imgSrcEnc[3]+'/'+imgSrcEnc[4]+'/w330-h185-c-rw/thumb.webp'; } else {var imgSrcFix = imgSrc;}
		var titLtr = /^[a-z]*$/.test(title.slice(-1)); if (titLtr == true) { var titleFix = title.slice(-1).charCodeAt(0)-96; } else { var titleFix = title.slice(-1); }
		othrPrt += '<li><a href="'+window.location.href.replace('/?m=1#','/v?m=1#').replace(/#.+/,'#')+ktn+'" ><img src="'+imgSrcFix+'"/><br /><div class="jdlPart">Part '+titleFix+'</div></a></li>';
	}		
	document.getElementById('ListPart').innerHTML = '<ul>'+othrPrt+'</ul>';	
}
	
