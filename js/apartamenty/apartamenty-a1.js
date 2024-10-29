const zoomDiv = document.getElementById("zoom-div");
const popupDiv = document.getElementById("popup-div");



let currentZoom = "";
let currentTel = 0
let interval


const galleryData = Array.from(document.querySelectorAll("#gallery img"))
const galleryUrls = galleryData.map(el => el.src)

const className = "max-md:hidden"
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
    clearInterval(interval)
    currentZoom = index
    popupDiv.classList.remove("hidden");
    zoomDiv.innerHTML = `<img src="${galleryUrls[index]}" alt="Powiększony obraz obiektu" class="my-auto rounded-2xl max-lg:rounded-none shadow-xl object-cover w-auto h-95vh max-lg:h-min max-lg:max-h-75vh max-lg:w-screen">`;
};


const closeZoom = () => {
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
    if (window.screen.width > 786) return 

    interval = setInterval(() => {
        next(true)
    }, 2500);
}
setLoop()




