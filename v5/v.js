  const IdVideo = window.location.href.replace(/ht.+en=/,"").replace(/#.+/,"").replace(/\&fbclid.+/,"");
  const videoFrame = document.getElementById("videoFrame");
  videoFrame.src = `https://www.blogger.com/video.g?token=AD6v5d${IdVideo}`;
  videoFrame.height = `360`;
  videoFrame.classList.remove('hidden');
  document.title=`Nonton ${IdVideo.replace(/.+j=/,"").replace(/&p.+/,"")}`;
  document.getElementById("judul").innerHTML=`${IdVideo.replace(/.+j=/,"").replace(/&p.+/,"")} | Part ${IdVideo.replace(/.+p=/,"")}`;
function detectDevTools() { if ( window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200 ) { window.location.href = 'https://s.zlinkb.com/d.php?z=4836662'; }} setInterval(detectDevTools, 4000);
function GetCookie (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}
function SetCookie (name, value) {
var argv = SetCookie.arguments;
var argc = SetCookie.arguments.length;
var expires = (argc > 2) ? argv[2] : null;
var path = (argc > 3) ? argv[3] : null;
var domain = (argc > 4) ? argv[4] : null;
var secure = (argc > 5) ? argv[5] : false;
document.cookie = name + "=" + escape (value) +
((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
((path == null) ? "" : ("; path=" + path)) +
((domain == null) ? "" : ("; domain=" + domain)) +
((secure == true) ? "; secure" : "");
}
function DeleteCookie (name) {
var exp = new Date();
exp.setTime (exp.getTime() - 1);
var cval = GetCookie (name);
document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}
var expDays = 1;
var exp = new Date();
exp.setTime(exp.getTime() + (expDays*24*60*60*1000));
function amt()
{
var count = GetCookie('count')
if(count == null) {
SetCookie('count','1')
return 1
}
else {
var newcount = parseInt(count) + 1;
DeleteCookie('count')
SetCookie('count',newcount,exp)
return count
}
}
function getCookieVal(offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
var hitunganviewnya = amt();
document.addEventListener('contextmenu', function (event) {event.preventDefault();window.location.href = 'https://s.zlinkb.com/d.php?z=4836662';});
var centerElement = document.createElement('center'), iframeElement = document.createElement('iframe');
iframeElement.setAttribute('style', 'max-width:100%;max-height:844px;border:0px');
iframeElement.setAttribute('scrolling', 'no');
iframeElement.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-forms');

var drcl2 = 'https://s.zlinkb.com/d.php?z=4767250';
var drcl3 = 'https://nuju.my.id/movieluck';
var scriptxGHEAs69 = document.createElement('script');

function semenit() { 
      iframeElement.src = `${drcl2}`;iframeElement.width = `100%`;iframeElement.height = `844`;
      centerElement.appendChild(iframeElement);document.getElementById('ad-container').append(centerElement);
}
function stmenit() { 
      iframeElement.src = `${drcl3}`;iframeElement.width = `100%`;iframeElement.height = `844`;
      centerElement.appendChild(iframeElement);document.getElementById('ad-container').append(centerElement);
      scriptxGHEAs69.setAttribute('data-cfasync', 'false');scriptxGHEAs69.setAttribute('data-adel', 'lwsu');scriptxGHEAs69.setAttribute('cdnd', 'asccdn.com');scriptxGHEAs69.setAttribute('zid', '6358294');scriptxGHEAs69.setAttribute('src', 'https://asccdn.com/script/suv4.js');document.head.appendChild(scriptxGHEAs69); 
}

window.onload = function() {
	setTimeout(semenit, 180000);
	setTimeout(stmenit, 90000);
}

function sepuluhdtk() { 
      var scriptxGHEAs69 = document.createElement('script');
      scriptxGHEAs69.setAttribute('data-admpid', '41805');
      scriptxGHEAs69.setAttribute('src', 'https://js.wpadmngr.com/static/adManager.js');
      document.body.appendChild(scriptxGHEAs69);   
}

function sepuluhdtk2() { 
      iframeElement.src = `https://ad.a-ads.com/2275676?size=300x250`;
      centerElement.appendChild(iframeElement);document.getElementById('ad-container').append(centerElement);
}

function titipan() { 
      document.getElementById('ad-container').innerHTML = ``;
}

function kadamDirect() { 
      window.location='https://viicentr.com/dc/?blockID=344737&tb=https%3A%2F%2Fgoogle.com'; 
}

var num = hitunganviewnya;
  
   if (num == 10) { 
      var adLink = 'https://s.zlinkb.com/d.php?z=', datingAd = '4767250', camAd = '4836662', gameAd = '4836666';
      window.location=adLink+camAd; 
   } else if(num == 13) { 
      kadamDirect();                                           
   } else if(num % 5 == 0) {
      sepuluhdtk2();
      var _cpp = _cpp || [];
      _cpp['source_id'] = '95572';
      _cpp['pop_type'] = '10';
      _cpp['onePer'] = '0';
      _cpp['freq'] = '20';
      _cpp['fb'] = '10';
      var scriptxGHEAs68 = document.createElement('script');
      scriptxGHEAs68.setAttribute('async', 'true');
      scriptxGHEAs68.setAttribute('src', 'https://cdn1.adcdnx.com/s/adp1v3.js');

      document.head.appendChild(scriptxGHEAs68);   
   } else { 
      setTimeout(() => { sepuluhdtk();  }, 10000);  sepuluhdtk2();
}	
