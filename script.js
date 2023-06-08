const btnE1=document.getElementById("btn");
const animecontEl=document.querySelector(".anime-container");
const animeImgEl=document.querySelector(".anime-img");
const animeNameEl=document.querySelector(".anime-name");

btnE1.addEventListener('click',async function(){
    try {
        btnE1.disabled=true;
        btnE1.innerText="loading..."
        animeNameEl.innerText="updating..."
        animeImgEl.src="sp.svg";
        const response=await fetch("https://api.catboys.com/img");
        const data =    await response.json();
        btnE1.disabled=false;
        btnE1.innerText="Get A Anime"
        animecontEl.style.display = "block"; 
        animeImgEl.src = data.url;
        animeNameEl.innerText=data.artist;
       
    } catch (error) {
        
    }
});
