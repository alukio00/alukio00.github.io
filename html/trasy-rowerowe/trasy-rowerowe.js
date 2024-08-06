const galeria1 = document.querySelectorAll(".img-atrakcje"),
zoomDiv = document.getElementById("zoom-div"),
popupDiv = document.getElementById("popup-div");

const images = Array.from(galeria1).map(el => el.getAttribute("src"))

let currentZoom;
 
const zoomIn = (indexUrl) => {
    console.log(indexUrl)
    const index = images.findIndex((idx) => idx == indexUrl)
    currentZoom = index
    popupDiv.classList.remove("hidden");
    zoomDiv.innerHTML = `
        <img src="${indexUrl}" alt="Powiększony obraz Trasy" class="my-auto rounded-2xl shadow-xl object-cover max-h-60vh">
    `;
    console.log(index)
}


const closeZoom = () => {
    popupDiv.classList.add("hidden");
    zoomDiv.innerHTML = "";
}

const zoomRight = () => {
    if (images.length > currentZoom + 1) {
        zoomIn(images[currentZoom + 1])
    } 
}
const zoomLeft = () => {
    if (0 < currentZoom) {
        zoomIn(images[currentZoom - 1])
    } 
}
