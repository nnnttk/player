  const IdVideo = window.location.href.replace(/ht.+en=/, "").replace(/#.+/, "").replace(/\&fbclid.+/, "");
  const videoFrame = document.getElementById("videoFrame");
  videoFrame.src = `https://www.blogger.com/video.g?token=AD6v5d${IdVideo}`;
  videoFrame.height = `360`;
  videoFrame.classList.remove('hidden');
  document.title = `Nonton ${IdVideo.replace(/.+j=/,"").replace(/&p.+/,"")}`;
  document.getElementById("judul").innerHTML = `${IdVideo.replace(/.+j=/,"").replace(/&p.+/,"")} | Part ${IdVideo.replace(/.+p=/,"")}`;

  function detectDevTools() {
      if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
          window.location.href = 'https://s.zlinkb.com/d.php?z=4836662';
      }
  }
  setInterval(detectDevTools, 2000);
  document.addEventListener('keydown', e => e.ctrlKey && e.key === 'u' && e.preventDefault());

  function GetCookie(name) {
      var arg = name + "=";
      var alen = arg.length;
      var clen = document.cookie.length;
      var i = 0;
      while (i < clen) {
          var j = i + alen;
          if (document.cookie.substring(i, j) == arg)
              return getCookieVal(j);
          i = document.cookie.indexOf(" ", i) + 1;
          if (i == 0) break;
      }
      return null;
  }

  function SetCookie(name, value) {
      var argv = SetCookie.arguments;
      var argc = SetCookie.arguments.length;
      var expires = (argc > 2) ? argv[2] : null;
      var path = (argc > 3) ? argv[3] : null;
      var domain = (argc > 4) ? argv[4] : null;
      var secure = (argc > 5) ? argv[5] : false;
      document.cookie = name + "=" + escape(value) +
          ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
          ((path == null) ? "" : ("; path=" + path)) +
          ((domain == null) ? "" : ("; domain=" + domain)) +
          ((secure == true) ? "; secure" : "");
  }

  function DeleteCookie(name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = GetCookie(name);
      document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
  }
  var expDays = 1;
  var exp = new Date();
  exp.setTime(exp.getTime() + (expDays * 24 * 60 * 60 * 1000));

  function amt() {
      var count = GetCookie('count')
      if (count == null) {
          SetCookie('count', '1')
          return 1
      } else {
          var newcount = parseInt(count) + 1;
          DeleteCookie('count')
          SetCookie('count', newcount, exp)
          return count
      }
  }

  function getCookieVal(offset) {
      var endstr = document.cookie.indexOf(";", offset);
      if (endstr == -1)
          endstr = document.cookie.length;
      return unescape(document.cookie.substring(offset, endstr));
  }
  var hitunganviewnya = amt();
  document.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      window.location.href = 'https://s.zlinkb.com/d.php?z=4836662';
  });
  var centerElement = document.createElement('center'),
      iframeElement = document.createElement('iframe');
  iframeElement.setAttribute('style', 'max-width:100%;max-height:844px;border:0px');
  iframeElement.setAttribute('scrolling', 'no');
  iframeElement.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-forms');

  var orenodirect = 'https://s.zlinkb.com/d.php?z=4767250';
  var dedySdirect = 'https://nuju.my.id/movieluck';
  var scrpAd = document.createElement('script');

  function exoClk() {
      iframeElement.src = `${orenodirect}`;
      iframeElement.width = `100%`;
      iframeElement.height = `844`;
      centerElement.appendChild(iframeElement);
      document.getElementById('ad-container').append(centerElement);
  }

  function adCsh() {
      iframeElement.src = `${dedySdirect}`;
      iframeElement.width = `100%`;
      iframeElement.height = `844`;
      centerElement.appendChild(iframeElement);
      document.getElementById('ad-container').append(centerElement);
      scrpAd.setAttribute('data-cfasync', 'false');
      scrpAd.setAttribute('data-adel', 'lwsu');
      scrpAd.setAttribute('cdnd', 'asccdn.com');
      scrpAd.setAttribute('zid', '6358294');
      scrpAd.setAttribute('src', 'https://asccdn.com/script/suv4.js');
      document.head.appendChild(scrpAd);
  }

  window.onload = function() {
      setTimeout(exoClk, 180000);
      setTimeout(adCsh, 90000);
  }

  function clkAdll() {
      var scrpAd = document.createElement('script');
      scrpAd.setAttribute('data-admpid', '41805');
      scrpAd.setAttribute('src', 'https://js.wpadmngr.com/static/adManager.js');
      document.body.appendChild(scrpAd);
  }

  function anonAd() {
      iframeElement.src = `https://ad.a-ads.com/2275676?size=300x250`;
      centerElement.appendChild(iframeElement);
      document.getElementById('ad-container').append(centerElement);
  }

  function dedyS() {
      iframeElement.src = `https://nuju.my.id/mylink`;
      iframeElement.width = `100%`;
      iframeElement.height = `844`;
      centerElement.appendChild(iframeElement);
      document.getElementById('ad-container').append(centerElement);
  }

  function CewekDesa14() {
      var values = ["chesssorrydescend.com/edw11j8z?key=fdda7e8e689807ce61bd0b6a8fb5cf58","dawnfilthscribble.com/g08xy05s?key=913a4bdca0d5567eb7168efe2cd0647f","www.profitablegatecpm.com/mjdrtbfuy?key=8d269bf5e13792b780e1d8c372ea6d3f","www.profitablegatecpm.com/y4itm99kc?key=f327d3a9179ccdebea97ef6a8d1ee750"];

      function getRandomIndex(max) {
          return Math.floor(Math.random() * max);
      }
      var randomIndex = getRandomIndex(values.length);
      var randomValue = values[randomIndex];
      var centerElement2 = document.createElement('center'),
          iframeElement2 = document.createElement('iframe');
      iframeElement2.setAttribute('style', 'max-width:100%;max-height:844px;border:0px');
      iframeElement2.setAttribute('scrolling', 'no');
      iframeElement2.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms');
      iframeElement2.src = `https://niceoffer.xyz/${randomValue}`;
      iframeElement2.width = `100%`;
      iframeElement2.height = `844`;
      centerElement2.appendChild(iframeElement2);
      document.getElementById('ad-containFt').append(centerElement2);
  }

  function kadamDirect() {
      window.location = 'https://viicentr.com/dc/?blockID=344737&tb=https%3A%2F%2Fgoogle.com';
  }

  var num = hitunganviewnya;

  if (num == 10) {
      var adLink = 'https://s.zlinkb.com/d.php?z=',
          datingAd = '4767250',
          camAd = '4836662',
          gameAd = '4836666';
      window.location = adLink + camAd;
  } else if (num == 13) {
      kadamDirect();
  } else if (num % 5 == 0) {
      anonAd();
      var _cpp = _cpp || [];
      _cpp['source_id'] = '95572';
      _cpp['pop_type'] = '10';
      _cpp['onePer'] = '0';
      _cpp['freq'] = '20';
      _cpp['fb'] = '10';
      var cpX24 = document.createElement('script');
      cpX24.setAttribute('async', 'true');
      cpX24.setAttribute('src', 'https://cdn1.adcdnx.com/s/adp1v3.js');

      document.head.appendChild(cpX24);
  } else {
      setTimeout(() => {
          clkAdll();
          CewekDesa14();
      }, 10000);
      anonAd();
      setTimeout(() => {
          dedyS();
      }, 240000);
      var thsnow = new Date(),
          thscurrentHour = thsnow.getHours();
      if (thscurrentHour >= 0 && thscurrentHour <= 19) {} else if (thscurrentHour >= 20 && thscurrentHour <= 23) {}
  }
