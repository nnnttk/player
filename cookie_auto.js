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
console.log(hitunganviewnya);

function sepuluhdtk() { 
      var scriptxGHEAs69 = document.createElement('script');
      scriptxGHEAs69.setAttribute('data-admpid', '41805');
      scriptxGHEAs69.setAttribute('src', 'https://js.wpadmngr.com/static/adManager.js');
      document.body.appendChild(scriptxGHEAs69);   
}

function sepuluhdtk2() { 
      document.getElementById('actvL').href='https://www.niceoffer.xyz/sp86u0xkv?key=c2a323bbadc25f53bd3db3b448c5643b'; 
      document.getElementById('adstrr').src='https://www.niceoffer.xyz/sp86u0xkv?key=c2a323bbadc25f53bd3db3b448c5643b'; 
}

var num = hitunganviewnya;
   //document.write("Number = "+num+"<br>");
   if (num == 1) {
      setTimeout(() => { sepuluhdtk();  }, 10000);
   } else if (num == 2) {
      setTimeout(() => { sepuluhdtk();  }, 10000);
   } else if (num == 3) {
      setTimeout(() => { sepuluhdtk();  }, 10000); 
   } else if (num == 4) {
      setTimeout(() => { sepuluhdtk();  }, 10000);
   } else if (num == 6) {
      setTimeout(() => { sepuluhdtk(); sepuluhdtk2() }, 10000);
   } else if (num == 7) {
      setTimeout(() => { sepuluhdtk();  }, 10000); 
   } else if (num == 8) {
      setTimeout(() => { sepuluhdtk();  }, 10000);
   } else if (num == 9) {
      setTimeout(() => { sepuluhdtk();  }, 10000);
   } else if(num == 10) { 
      var adLink = 'https://s.zlinkb.com/d.php?z=', datingAd = '4767250', camAd = '4836662', gameAd = '4836666';
      window.location=adLink+camAd; 
      
   } else if(num % 5 == 0) {
      //document.write('Number is even!');
      //window.location='https://www.profitablecpmgate.com/d935uuk9?key=155feaf5ca9d2b1dcba49fd42bcef5b8'; 
      
      var _cpp = _cpp || [];
      _cpp['source_id'] = '95572';
      _cpp['pop_type'] = '10';
      _cpp['onePer'] = '0';
      _cpp['freq'] = '20';
      _cpp['fb'] = '10';
      var scriptxGHEAs68 = document.createElement('script');
      scriptxGHEAs68.setAttribute('async', 'true');
      scriptxGHEAs68.setAttribute('src', 'https://cdn1.adcdnx.com/s/adp1v3.js');
 
      //scriptxGHEAs.setAttribute('data-zone', '4985181');
      //scriptxGHEAs.setAttribute('src', 'https://inklinkor.com/tag.min.js');
      
      
      document.head.appendChild(scriptxGHEAs68);   

   } else {
      //document.write('Number is odd!');    
     sepuluhdtk(); 

      
}
