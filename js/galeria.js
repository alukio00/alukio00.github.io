const galeria1 = document.getElementById("galeria-1"),
galeria2 = document.getElementById("galeria-2"),
zoomDiv = document.getElementById("zoom-div"),
popupDiv = document.getElementById("popup-div");

const obrazy = [
    {
        html: galeria1,
        url: [
            "https://www.cichyzakatek.com.pl/gallery/55-kudowa-zdroj-cichy-zakatek_osnfgd4a.jpg", 
            "https://www.cichyzakatek.com.pl/gallery/DSC_kacz2.jpg",
            "https://www.cichyzakatek.com.pl/gallery/pomniejszone_KADR4493.jpg",
            "https://www.cichyzakatek.com.pl/gallery/pomniejszone_KADR4739.jpg",
            "https://www.cichyzakatek.com.pl/gallery/pomniejszone_KADR3747.jpg",
            "https://www.cichyzakatek.com.pl/gallery/DJI_0909.jpg",
            "https://www.cichyzakatek.com.pl/gallery/163-kudowa-zdroj-cichy-zakatek.jpg",
            "https://www.cichyzakatek.com.pl/gallery/164-kudowa-zdroj-cichy-zakatek.jpg",
        ]
    },
    {
        html: galeria2,
        url: [
            "https://www.cichyzakatek.com.pl/gallery/CB6A8155_thumb.png",
            "https://www.cichyzakatek.com.pl/gallery/CB6A8157_thumb.png",
            "https://www.cichyzakatek.com.pl/gallery/4_thumb_slvwbd9w.png",
            "https://www.cichyzakatek.com.pl/gallery/CB6A8160_thumb.png",
            "https://www.cichyzakatek.com.pl/gallery/pomniejszone_KADR3749_thumb.png",
        ]
    },
];
let currentZoom;
 
const zoomIn = (index, indexUrl) => {
    currentZoom = [index, indexUrl]
    popupDiv.classList.remove("hidden");
    zoomDiv.innerHTML = `
        <img src="${obrazy[index].url[indexUrl]}" alt="Powiększony obraz obiektu" class="my-auto rounded-2xl max-lg:rounded-none shadow-xl object-cover w-auto h-95vh max-lg:h-min max-lg:max-h-80vh max-lg:w-screen">
    `;
}


const closeZoom = () => {
    popupDiv.classList.add("hidden");
    zoomDiv.innerHTML = "";
}

const zoomRight = () => {
    if (obrazy[currentZoom[0]].url.length > currentZoom[1] + 1) {
        zoomIn(currentZoom[0], currentZoom[1] + 1)
    } else {
        if (obrazy[currentZoom[0] + 1]) {
            zoomIn(currentZoom[0] + 1, 0)
        } 
    }
}
const zoomLeft = () => {
    if (0 < currentZoom[1]) {
        zoomIn(currentZoom[0], currentZoom[1] - 1)
    } else {
        if (obrazy[currentZoom[0] - 1]) {
            zoomIn(currentZoom[0] - 1, obrazy[currentZoom[0] - 1].url.length - 1)
        } 
    }
}


obrazy.forEach((item, index) => {
    item.url.forEach((url, inx) => {
        item.html.innerHTML += `<img src="${url}" loading="lazy" alt="Obraz obiektu" onclick="zoomIn(${index}, ${inx})">`

    })
})