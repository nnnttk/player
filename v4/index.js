const IdCode = window.location.href.replace(/ht.+de=/,"").replace("#","").replace(/\&fbclid.+/,"").toUpperCase();   
const apiUrl = `https://watch.idblog.eu.org/v4/data/${IdCode}.json`,
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
	resultContainer.appendChild(thumbnailImg);
	resultContainer.appendChild(document.createElement("br"));
	resultContainer.appendChild(videoLink);			
	resultContainer.appendChild(document.createElement("br"));
	resultContainer.appendChild(document.createElement("br"));
			
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
    console.error("Fetch error:", t)
}));  
