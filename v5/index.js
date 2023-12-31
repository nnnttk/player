const IdCode = window.location.href.replace(/ht.+de=/,"").replace("#","").replace(/\&fbclid.+/,"").toUpperCase();  document.title= `Nonton ${IdCode}`;
const DoHost = window.location.protocol+'//'+window.location.hostname+window.location.pathname.replace('premium','');
const DtcPrm = window.location.href.includes('premium'), bImgA = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/', bImgB = '/w640-h386-c-rw/Thumbnail.webp'; 
if (DtcPrm==false) {$('#premiumvideo').each(function(){$(this).attr("href", window.location.href.replace('v5/','v5/premium'));}); } 
const apiUrl = `${DoHost}data/${IdCode}.json`,
    resultContainer = document.getElementById("result-container");
fetch(apiUrl).then((t => {
    if (!t.ok) throw new Error(`HTTP error! Status: ${t.status}`);
    return t.json()
})).then((t => {
	var isi = t.token;
		for (var i = 0; i < isi.length; i++) {
	document.getElementById('judul').innerHTML = `${IdCode} | Total ${isi.length} Bagian`;
	const videoId = isi[i];		
        const videoLink = document.createElement("a");
        videoLink.href = `${DoHost}v?token=${videoId}`;		
        videoLink.textContent = `${IdCode} - Part ${i+1}`;		
	const thumbnailImg = document.createElement("img");
        thumbnailImg.src = `${bImgA}${t.images[i]}${bImgB}`;
        thumbnailImg.alt = `${IdCode}`;
        thumbnailImg.addEventListener("click", () => {
            loadVideo(videoId);
        });		
	var newDiv = document.createElement('div');
	newDiv.classList.add('result-item');
	resultContainer.appendChild(newDiv);			
	newDiv.appendChild(thumbnailImg);	
	newDiv.appendChild(videoLink);			
			
function loadVideo(videoId) {
	window.open(`${DoHost}v?token=${videoId}`);
}
			
		}

    
})).catch((t => {
    window.location=window.location.protocol+'//'+window.location.hostname+'/home';
}));  



fetch('list.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the JSON data
            console.log(data);
	    for (var i = 0; i < data.filmTitles.length; i++) {
		var posts = ``;
                const dataJudul = `${DoHost}data/${data.filmTitles[i].toUpperCase()}.json`; 
		const dJforScrp = data.filmTitles[i].replace('-','');
		if (DtcPrm==true) {var thsPrm = 'premium'} else {var thsPrm = ''} 
		const jsData = " 																																																																																																																																												\n\
				function Data"+i+"("+dJforScrp+"){ 																																																																																																																																						\n\
					var isPosts"+i+" = ''; 																																																																																																																																								\n\
					for (var i2 = 0; i2 < 1; i2++) { 																																																																																																																																					\n\
        				const gmbrthumbnailImg = '"+bImgA+"'+"+dJforScrp+".images[i2]+'"+bImgB+"'; 																																																																																																																										\n\
					const gmbrSglImg = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlV07M5tlamZ1Qp1XzWOsXPTvxD8eswgvolTVuUtt4sEGTvZbVSKyKnVOYqOCAUVcb_-ODoLnWy5X8x3nN2xUI2gqJBSAfqdeMQjzDQo6HqKv8BZbvWklIU8ZOnIVGbzdAciyGx5L7yjeVVGZd-SKswRKnLCIeMJ7TxwcW0yvlGJe9cY_Rr3xO22vvuA/w640-h386-c-rw/Parental_Advisory.webp'; 																																																																\n\
					var gmbrIMG = encodeURIComponent(gmbrthumbnailImg), sgLImg = encodeURIComponent(gmbrSglImg); 																																																																																																																						\n\
					} 																																																																																																																																													\n\
					isPosts"+i+" += decodeURIComponent('%3Cdiv%20class%3D%22result-item%22%3E%3Ca%20id%3D%22"+data.filmTitles[i].toUpperCase()+"%22%20href%3D%22.%2F"+thsPrm+"%3Fcode%3D"+data.filmTitles[i].toUpperCase()+"%22%3E%3Cimg%20src%3D%22'+gmbrIMG+'%22%20alt%3D%22"+data.filmTitles[i].toUpperCase()+"%22%20id%3D%22"+data.filmTitles[i].toUpperCase()+"%22%20onerror%3D%22this.onerror%3Dnull%3Bthis.src%3D%60'+sgLImg+'%60%3B%22%20%2F%3E%3C%2Fa%3E%3Ca%20href%3D%22.%2F%3Fcode%3D"+data.filmTitles[i].toUpperCase()+"%22%3E"+data.filmTitles[i].toUpperCase()+"%3C%2Fa%3E%3C%2Fdiv%3E'); \n\
					$('#filmList').append(isPosts"+i+");																																																																																																																																				\n\
																																																																																																																																																		\n\
				} 																																																																																																																																														\n\
																																																																																																																																																		\n\
				$(document).ready(function() {																																																																																																																																							\n\
    					$.ajax({																																																																																																																																										\n\
        					url: '"+dataJudul+"',																																																																																																																																						\n\
        					dataType: 'json',																																																																																																																																							\n\
        					success: function("+dJforScrp+") {Data"+i+"("+dJforScrp+")},																																																																																																																												\n\
        					error: function(xhr, status, error) {																																																																																																																																		\n\
            						console.error(status + ': ' + error);																																																																																																																																\n\
            						$('#filmList').text('Error fetching JSON data.');																																																																																																																													\n\
        						}																																																																																																																																										\n\
    					});																																																																																																																																												\n\
				});";

		posts += jsData;   
		$('#scriptc').append('<scr'+'ipt>'+posts+'</scr'+'ipt>');
            }
    
        });
