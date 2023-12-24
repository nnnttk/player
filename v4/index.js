const IdCode = window.location.href.replace(/ht.+de=/,"").replace("#","").replace(/\&fbclid.+/,"").toUpperCase();  document.title= `Nonton ${IdCode}`;
const DoHost = window.location.protocol+'//'+window.location.hostname+window.location.pathname;
const apiUrl = `${DoHost}data/${IdCode}.json`,
    resultContainer = document.getElementById("result-container");
fetch(apiUrl).then((t => {
    if (!t.ok) throw new Error(`HTTP error! Status: ${t.status}`);
    return t.json()
})).then((t => {
	var isi = t.result.files;
		for (var i = 0; i < isi.length; i++) {
	document.getElementById('judul').innerHTML = `${IdCode} | Total ${isi.length} Bagian`;
	const videoId = isi[i].file_code;		
        const videoLink = document.createElement("a");
        videoLink.href = '#';//https://doods.pro/e/'+isi[i].file_code;
	const firstLetter = isi[i].title.charAt(0).charCodeAt(0)-96;		
        videoLink.textContent = `${IdCode} - Part ${firstLetter}`;		
	const thumbnailImg = document.createElement("img");
        thumbnailImg.src = isi[i].single_img;
        thumbnailImg.alt = isi[i].title;
        videoLink.addEventListener("click", () => {
            loadVideo(videoId,IdCode,firstLetter); 
        });
        thumbnailImg.addEventListener("click", () => {
            loadVideo(videoId,IdCode,firstLetter);
        });		
	var newDiv = document.createElement('div');
	newDiv.classList.add('result-item');
	resultContainer.appendChild(newDiv);			
	newDiv.appendChild(thumbnailImg);	
	newDiv.appendChild(videoLink);			
			
function loadVideo(videoId,IdCode,firstLetter) {
    const videoFrame = document.getElementById("videoFrame");
    videoFrame.src = `https://doods.pro/e/${videoId}`;
    videoFrame.height = `360`;
    videoFrame.classList.remove('hidden');
    document.title = `${IdCode} - Part ${firstLetter}`;
    document.getElementById("judul").innerHTML = `${IdCode} - Part ${firstLetter}`;	
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
		const jsData = " function Data"+i+"("+dJforScrp+"){ \n\
					var isPosts"+i+" = ''; \n\
					for (var i2 = 0; i2 < 1; i2++) { \n\
        				const gmbrthumbnailImg = "+dJforScrp+".result.files[i2].splash_img, gmbrSglImg = "+dJforScrp+".result.files[i2].single_img; \n\
					var gmbrIMG = encodeURIComponent(gmbrthumbnailImg); \n\
					} \n\
					isPosts"+i+" += decodeURIComponent('%3Cdiv%20class%3D%22result-item%22%3E%3Ca%20id%3D%22"+data.filmTitles[i].toUpperCase()+"%22%20href%3D%22.%2F%3Fcode%3D"+data.filmTitles[i].toUpperCase()+"%22%3E%3Cimg%20src%3D%22'+gmbrIMG+'%22%20alt%3D%22"+data.filmTitles[i].toUpperCase()+"%22%20id%3D%22"+data.filmTitles[i].toUpperCase()+"%22%20onerror%3D%22loadAltImg()%22%20%2F%3E%3C%2Fa%3E%3Ca%20href%3D%22.%2F%3Fcode%3D"+data.filmTitles[i].toUpperCase()+"%22%3E"+data.filmTitles[i].toUpperCase()+"%3C%2Fa%3E%3C%2Fdiv%3E%0Afunction%20loadAltImg()%20%7Bdocument.getElementById(%22splashImg%22).src%20%3D%20%22'+gmbrSglImg+'%22%3B%7D'); \n\
					$('#filmList').append(isPosts"+i+");	\n\
					 \n\
				} \n\
				\n\
				$(document).ready(function() {\n\
    					$.ajax({\n\
        					url: '"+dataJudul+"',\n\
        					dataType: 'json',\n\
        					success: function("+dJforScrp+") {Data"+i+"("+dJforScrp+")},\n\
        					error: function(xhr, status, error) {\n\
            						console.error(status + ': ' + error);\n\
            						$('#filmList').text('Error fetching JSON data.');\n\
        						}\n\
    					});\n\
				});";

		posts += jsData;   
		$('#scriptc').append('<scr'+'ipt>'+posts+'</scr'+'ipt>');
            }
    
        });
