const galeria1 = document.getElementById("galeria-1"),

zoomDiv = document.getElementById("zoom-div"),
popupDiv = document.getElementById("popup-div");

const galleryData = Array.from(document.querySelectorAll("#galeria-1 img"))
const galleryUrls = galleryData.map(el => el.src)

let currentZoom;

const body = document.querySelector("body")
 
const zoomIn = (index) => {
    body.style.paddingTop = "0px"
    currentZoom = index
    popupDiv.classList.remove("hidden");

    zoomDiv.innerHTML = `
        <img src="${galleryUrls[index]}" alt="Powiększony obraz obiektu" class="my-auto rounded-2xl max-lg:rounded-none shadow-xl object-cover w-auto h-95vh max-lg:h-min max-lg:max-h-80vh max-lg:w-screen">
    `;
}


const closeZoom = () => {
    body.style.paddingTop = "75px"
    popupDiv.classList.add("hidden");
    zoomDiv.innerHTML = "";
}

const zoomRight = () => {
    if (galleryUrls.length > currentZoom + 1) {
        zoomIn(currentZoom + 1)
    } else {

    zoomIn(0)

    }
    
}
const zoomLeft = () => {
    if (0 < currentZoom) {
        zoomIn(currentZoom - 1)
    } else {
        zoomIn(galleryUrls.length - 1)
    }
}
