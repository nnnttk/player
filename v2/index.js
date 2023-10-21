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

//dataBLOG 
var iD001 = "6800905789094412057", blG001 = "09sa0d9u";

var 	urlasli = window.location.href;
var  	ufeeds = urlasli.replace(/.+#/,""),
	fee = ufeeds.replace("O",Base64.decode("LmJsb2dzcG90LmNvbS9mZWVkcy9wb3N0cy9kZWZhdWx0Lw=="))
	.replace("iD001",blG001),
	idnonton = urlasli.replace(/.+?m=1#/,"");



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
	emdc.innerHTML = '<textarea readonly id="embcd" onclick="cpFunc();"> <iframe scrolling="no" allowfullscreen style="width:100%;height:480px;border:0px;overflow:hidden;" src="'+urlasli+'" ></iframe></textarea>';
	
	try {
		var vparts = post.category[0].term, myDom = post.link.pop().href.replace("https://","").replace(/\/[^/]+(\.[^/.]+)$/,"").split("/");
	    	var ngeList = document.createElement('script'); ngeList.src = "https://"+myDom[0]+"/feeds/posts/default/-/"+vparts+"?max-results=26&alt="+"json"+"&callback="+"plst"; document.getElementsByTagName('head')[0].appendChild(ngeList);	
	    }
	catch(err) {}
	
}
	

	
var script = document.createElement('script');
var gntMVL = "https://"+fee+"?alt=json&callback=nobars";
script.src = gntMVL;

document.getElementsByTagName('head')[0].appendChild(script); 

//console.log(feed);

$(document).ready(function(){
	$('.nonton').each(function(){ 
		$(this).attr("id", idnonton); 
	});
});




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
			urlfe = urlf.replace("/comments/default","").replace(/ht.+ds/,""),
			ktn = urlfe.replace("/posts/default/","O").replaceAll("/",""), 
			pgntn = "v2/?m=1#";
		var imgSrcEnc = encodeURIComponent(imgSrc).replace("https%3A%2F%2F","").split("%2F"), imgBlggr = 'blogger.googleusercontent.com/img/'; if(imgSrc.includes(imgBlggr) == true){ var imgSrcFix = 'https://dl.kaskus.id/'+imgBlggr+imgSrcEnc[2]+'/'+imgSrcEnc[3]+'/'+imgSrcEnc[4]+'/w330-h185-c-rw/thumb.webp'; } else {var imgSrcFix = imgSrc;}
		var titLtr = /^[a-z]*$/.test(title.slice(-1)); if (titLtr == true) { var titleFix = title.slice(-1).charCodeAt(0)-96; } else { var titleFix = title.slice(-1); }

		var ktnfix = ktn.replace(iD001,"iD001");
		othrPrt += '<li><a href="'+window.location.href.replace('/?m=1#','/v?m=1#').replace(/#.+/,'#')+ktnfix+'" ><img src="'+imgSrcFix+'"/><br /><div class="jdlPart">Part '+titleFix+'</div></a></li>';
	}		
	document.getElementById('ListPart').innerHTML = '<ul>'+othrPrt+'</ul>';		
	
	var randcat = json.feed.category, myTLDom = json.feed.link[2].href.replace("https://","").replace(/\/[^/]+(\.[^/.]+)$/,"").split("/"), awRanapiurl = "https://"+myTLDom[0]+'/feeds/posts/default/-/', akhRanapiurl = '?max-results=1&alt=json&callback=';
	var wrmr = document.getElementById("writemore");
	for (var i = 0; i < 69; i++) {	
		var ranapiurl = awRanapiurl+randcat[i].term+akhRanapiurl+'plst'+(i+1), script = document.createElement('script');script.setAttribute('src', ranapiurl); document.head.appendChild(script); 
		$('#writemore').append( '<scr' + 'ipt>'+ 'function plst'+(i+1)+'(json) {'+ 'var endata = json.feed.entry, othrPrt = ""; for (var i = 0; i < endata.length; i++) {'+Base64.decode("dmFyIGltZ0NvbnRlbnQgPSAvPGltZyArKC4qPylzcmM9KFsnIl0pKFteJyJdKz8pKFsnIl0pKC4qPykgKlwvPz4vaS5leGVjKGVuZGF0YVtpXS5jb250ZW50LiR0KSwgaW1nU3JjID0gaW1nQ29udGVudCAmJiBpbWdDb250ZW50WzNdID8gaW1nQ29udGVudFszXSA6IGNvbmZpZy5ub1NyYzs=")+'var title = endata[i].title.$t, url = endata[i].link.pop().href,urlf = endata[i].link[0].href,stw = urlf.replace(/feed.+default/,""),urlfe = urlf.replace("/comments/default","").replace(/ht.+ds/,""),urlfee = urlfe.replace("/comments/default","").replace(/ht.+ds/,""),ktn = urlfee.replace("/posts/default/","O").replaceAll("/","").replace("6800905789094412057","iD001");'+'var imgSrcEnc = encodeURIComponent(imgSrc).replace("https%3A%2F%2F","").split("%2F"), imgBlggr = "blogger.googleusercontent.com/img/"; if(imgSrc.includes(imgBlggr) == true){ var imgSrcFix = "https://dl.kaskus.id/"+imgBlggr+imgSrcEnc[2]+"/"+imgSrcEnc[3]+"/"+imgSrcEnc[4]+"/w330-h185-c-rw/thumb.webp"; } else {var imgSrcFix = imgSrc;}'+'var titLtr = /^[a-z]*$/.test(title.slice(-1)); if (titLtr == true) { var titleFix = title.slice(-1).charCodeAt(0)-96; } else { var titleFix = title.slice(-1); }'+Base64.decode("b3RoclBydCArPSAnPGxpPjxhIGhyZWY9Iicrd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgnLz9tPTEjJywnL3Y/bT0xIycpLnJlcGxhY2UoLyMuKy8sJyMnKStrdG4rJyIgPjxpbWcgc3JjPSInK2ltZ1NyY0ZpeCsnIi8+PGJyIC8+PGRpdiBjbGFzcz0iamRsUGFydCI+UGFydCAnK3RpdGxlRml4Kyc8L2Rpdj48L2E+PC9saT4nOw==")+'}'+'$(document).ready(function(){  $("#OtherUl").append(othrPrt)  });'+ '}'+ '</scr' + 'ipt>' );
	}	

}

async function detectAdBlock() {
  let adBlockEnabled = false;
  const ClickAdillaAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  try {
    await fetch(new Request(ClickAdillaAdUrl)).catch(_ => adBlockEnabled = true);
  } catch (e) {
    adBlockEnabled = true;
  } finally {
		if(adBlockEnabled==true){
			alert('Adblock / Pemblokir Iklan Terdeteksi');
			window.location=window.location.href.replace('/?m=1#','/premium/?m=1#');
		}
  }
}
detectAdBlock();
