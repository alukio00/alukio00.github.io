const galeria1 = document.getElementById("galeria-1"),

zoomDiv = document.getElementById("zoom-div"),
popupDiv = document.getElementById("popup-div");

const obrazy = [
    '/img/galeria/160-kudowa-zdroj-cichy-zakatek.jpg',
    '/img/galeria/161-kudowa-zdroj-cichy-zakatek.jpg',
    '/img/galeria/162-kudowa-zdroj-cichy-zakatek.jpg',
    '/img/galeria/163-kudowa-zdroj-cichy-zakatek.jpg',
    '/img/galeria/164-kudowa-zdroj-cichy-zakatek.jpg',
    '/img/galeria/55-kudowa-zdroj-cichy-zakatek_r74uyt19.jpg',
    '/img/galeria/56-kudowa-zdroj-cichy-zakatek_h16z48n0.jpg',
    '/img/galeria/61-kudowa-zdroj-cichy-zakatek_2f4tviy9.jpg',
    '/img/galeria/72-DUZYkudowa-zdr-j-cichy-zak-tek.jpg',
    '/img/galeria/CB6A8164.jpg',
    '/img/wspólne/CB6A8174.jpg',
    '/img/galeria/DJI_0909.jpg',
    '/img/galeria/DSC_0246.jpg',
    '/img/galeria/DSC_0389orgFULL1EDYC (1).jpg',
    '/img/galeria/DSC_0849.jpg',
    '/img/galeria/DSC_1220.jpg',
    '/img/galeria/DSC_kacz2.jpg',
    '/img/galeria/EC3A5361.jpg',
    '/img/galeria/EC3A5371.jpg',
    '/img/galeria/IMG20240603184114.jpg',
    '/img/galeria/kaczKadr.jpg',
    '/img/galeria/pomniejszone_KADR3747 (1).jpg',
    '/img/galeria/pomniejszone_KADR4037.jpg',
    '/img/galeria/pomniejszone_KADR4042.jpg',
    '/img/galeria/pomniejszone_KADR4422.jpg',
    '/img/galeria/pomniejszone_KADR4457.jpg',
    '/img/galeria/pomniejszone_KADR4493.jpg',
    '/img/galeria/pomniejszone_KADR4501.jpg',
    '/img/galeria/pomniejszone_KADR4739.jpg'
]

let currentZoom;
 
const zoomIn = (index) => {
    currentZoom = index
    popupDiv.classList.remove("hidden");

    zoomDiv.innerHTML = `
        <img src="${obrazy[index]}" alt="Powiększony obraz obiektu" class="my-auto rounded-2xl max-lg:rounded-none shadow-xl object-cover w-auto h-95vh max-lg:h-min max-lg:max-h-80vh max-lg:w-screen">
    `;
}


const closeZoom = () => {
    popupDiv.classList.add("hidden");
    zoomDiv.innerHTML = "";
}

const zoomRight = () => {
    if (obrazy.length > currentZoom + 1) {
        zoomIn(currentZoom + 1)
    } 
    
}
const zoomLeft = () => {
    if (0 < currentZoom) {
        zoomIn(currentZoom - 1)
    }
}

obrazy.forEach((item, index) => {

    galeria1.innerHTML += `<img src="${item}" loading="lazy" alt="Obraz obiektu" onclick="zoomIn(${index})">`

})