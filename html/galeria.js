const galeria1 = document.getElementById("galeria-1"),
galeria2 = document.getElementById("galeria-2"),
zoomDiv = document.getElementById("zoom-div"),
popupDiv = document.getElementById("popup-div");

const obrazy = [
    {
        html: galeria1,
        url: [
            "https://www.cichyzakatek.com.pl/gallery/1_thumb.png",
            "https://www.cichyzakatek.com.pl/gallery/5_thumb.png",
            "https://www.cichyzakatek.com.pl/gallery/4_thumb.png",
            "https://www.cichyzakatek.com.pl/gallery/8_thumb_yvqmfw05.png",
            "https://www.cichyzakatek.com.pl/gallery/3_thumb.png",
            "https://www.cichyzakatek.com.pl/gallery/53-kudowa-zdroj-cichy-zakatek_thumb_udhnv6wo.png",
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
        <img src="${obrazy[index].url[indexUrl]}" alt="Powiększony obraz obiektu" class="mx-auto my-auto rounded-2xl shadow-xl object-cover max-w-80% max-h-80vh">
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