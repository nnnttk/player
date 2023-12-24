const IdCode = window.location.href.replace(/ht.+de=/,"").replace("#","").replace(/\&fbclid.+/,"").toUpperCase();  
const DoHost = window.location.protocol+'//'+window.location.hostname+window.location.pathname;
const apiUrl = `${DoHost}data/${IdCode}.json`,
    resultContainer = document.getElementById("result-container");
fetch(apiUrl).then((t => {
    if (!t.ok) throw new Error(`HTTP error! Status: ${t.status}`);
    return t.json()
})).then((t => {
	var isi = t.result.files;
		for (var i = 0; i < isi.length; i++) {
	
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
	newDiv.class =	'result-item';
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
