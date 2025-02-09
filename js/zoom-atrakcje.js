const galeria1 = document.querySelectorAll(".img-atrakcje"),
zoomDiv = document.getElementById("zoom-div"),
popupDiv = document.getElementById("popup-div");

const images = Array.from(galeria1).map(el => el.getAttribute("src")).map(el => el.replace("/tel/", "/full/"))

let currentZoom;
const body = document.querySelector("body")
 
const zoomIn = (indexUrl) => {

    body.style.paddingTop = "0px"
    const index = images.findIndex((idx) => idx == indexUrl)
    currentZoom = index
    popupDiv.classList.remove("hidden");
    zoomDiv.innerHTML = `
        <img src="${indexUrl}" alt="Powiększony obraz" class="my-auto rounded-2xl max-lg:rounded-none shadow-xl object-cover w-auto h-95vh max-lg:h-min max-lg:max-h-80vh max-lg:w-screen">
    `;
    console.log(index)
}


const closeZoom = () => {
    body.style.paddingTop = "75px"
    popupDiv.classList.add("hidden");
    zoomDiv.innerHTML = "";
}

const zoomRight = () => {
    if (images.length > currentZoom + 1) {
        zoomIn(images[currentZoom + 1])
    } else {
        zoomIn(images[0])
    }
}
const zoomLeft = () => {
    if (0 < currentZoom) {
        zoomIn(images[currentZoom - 1])
    } else {
        zoomIn(images[images.length - 1])
    }
}
