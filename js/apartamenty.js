const zoomDiv = document.getElementById("zoom-div");
const popupDiv = document.getElementById("popup-div");



let currentZoom = "";
let currentTel = 0
let interval

const body = document.querySelector("body")


const galleryData = Array.from(document.querySelectorAll("#gallery img"))
const galleryUrls = galleryData.map(el => el.src)

const className = "max-sm:hidden"
const prev = () => {
    clearInterval(interval)
    
    galleryData[currentTel].classList.add(className)

    if (currentTel > 0) {
        
        currentTel--
        
        
    } else {
        
        currentTel = galleryUrls.length - 1
        
    }
    galleryData[currentTel].classList.remove(className)

}
const next = (selfPlayed=false) => {
    if (!selfPlayed) {
        clearInterval(interval)
    }
    galleryData[currentTel].classList.add(className)

    if (currentTel < galleryUrls.length - 1) {

        currentTel++

    } else {

        currentTel = 0
        
    }
    galleryData[currentTel].classList.remove(className)
}

const zoom = (index) => {
    body.style.paddingTop = "0px"
    clearInterval(interval)
    currentZoom = index
    popupDiv.classList.remove("hidden");
    zoomDiv.innerHTML = `
    <picture>
        <source media="(max-width:650px)" srcset="${galleryUrls[index]}" alt="Powiększony obraz obiektu" class="my-auto rounded-2xl max-lg:rounded-none shadow-xl object-cover w-auto h-95vh max-lg:h-min max-lg:max-h-95vh max-lg:w-screen">
        <img src="${galleryUrls[index].replace("/tel/", "/full/")}" alt="Powiększony obraz obiektu" class="my-auto rounded-2xl max-lg:rounded-none shadow-xl object-cover w-auto h-95vh max-lg:h-min max-lg:max-h-95vh max-lg:w-screen">
    </picture>
    `;
};


const closeZoom = () => {
    body.style.paddingTop = "75px"
    setLoop()
    popupDiv.classList.add("hidden");
    zoomDiv.innerHTML = "";
};


const zoomRight = () => {
  
    if (currentZoom < galleryUrls.length - 1) {
        zoom(currentZoom + 1);
    } else {
        zoom(0)
    }
};

const zoomLeft = () => {

    if (currentZoom > 0) {
        zoom(currentZoom - 1);
    } else {
        zoom(galleryUrls.length - 1)
    }
};

const setLoop = () => {
    if (window.screen.width > 640) return 

    interval = setInterval(() => {
        next(true)
    }, 2500);
}
setLoop()




