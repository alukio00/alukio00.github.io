const galery1 = document.getElementById("galery-1"),
galery2 = document.getElementById("galery-2"),
galery3 = document.getElementById("galery-3"),
zoomDiv = document.getElementById("zoom-div"),
popupDiv = document.getElementById("popup-div");

const liczba = screen.width > 1340 ? 3 : screen.width > 768 ? 1 : 0;
let currentZoom = ""

let galery = [
    {
        html: galery1,
        index: 0,
        url: [
                "https://www.cichyzakatek.com.pl/gallery/52-kudowa-zdroj-cichy-zakatek_thumb.png", 
                "https://www.cichyzakatek.com.pl/gallery/1AA3LUST_thumb.png", 
                "https://www.cichyzakatek.com.pl/gallery/56-kudowa-zdroj-cichy-zakatek_thumb.png", 
                "https://www.cichyzakatek.com.pl/gallery/EC3A5304_thumb.png", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/1B0A3959.jpg", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/EC3A5271.jpg", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/1B0A4031.jpg", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/1B0A4041.jpg", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/1B0A4027.jpg", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/CB6A8143.jpg", 
                "https://www.cichyzakatek.com.pl/gallery/163-kudowa-zdroj-cichy-zakatek.jpg", 
                "https://www.cichyzakatek.com.pl/gallery/164-kudowa-zdroj-cichy-zakatek.jpg"],
    },
    {
        html: galery2,
        index: 0,
        url: [
                "https://www.cichyzakatek.com.pl/gallery/1AA3LUST_thumb.png", 
                "https://www.cichyzakatek.com.pl/gallery/56-kudowa-zdroj-cichy-zakatek_thumb.png", 
                "https://www.cichyzakatek.com.pl/gallery/EC3A5304_thumb.png", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/1B0A3959.jpg", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/EC3A5271.jpg", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/1B0A4031.jpg", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/1B0A4041.jpg", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/1B0A4027.jpg", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/CB6A8143.jpg", 
                "https://www.cichyzakatek.com.pl/gallery/163-kudowa-zdroj-cichy-zakatek.jpg", 
                "https://www.cichyzakatek.com.pl/gallery/164-kudowa-zdroj-cichy-zakatek.jpg"],
    },
    {
        html: galery3,
        index: 0,
        url: [
                "https://www.cichyzakatek.com.pl/gallery/56-kudowa-zdroj-cichy-zakatek_thumb.png", 
                "https://www.cichyzakatek.com.pl/gallery/EC3A5304_thumb.png", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/1B0A3959.jpg", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/EC3A5271.jpg", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/1B0A4031.jpg", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/1B0A4041.jpg", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/1B0A4027.jpg", 
                "https://www.cichyzakatek.com.pl/pluginAppObj/pluginAppObj_13/CB6A8143.jpg", 
                "https://www.cichyzakatek.com.pl/gallery/163-kudowa-zdroj-cichy-zakatek.jpg", 
                "https://www.cichyzakatek.com.pl/gallery/164-kudowa-zdroj-cichy-zakatek.jpg"],
    },
]

const zoom = (galeria, index) => {
    currentZoom = [galeria, index]
    popupDiv.classList.remove("hidden");
    zoomDiv.innerHTML = `
        <img src="${galery[galeria].url[index]}" alt="Powiększony obraz obiektu" class="my-auto rounded-2xl max-lg:rounded-none shadow-xl object-cover w-auto h-95vh max-lg:h-min max-lg:max-h-75vh max-lg:w-screen">
    `;
}

const closeZoom = () => {
    popupDiv.classList.add("hidden");
    zoomDiv.innerHTML = "";
}

const zoomRight = () => {
    if (galery[currentZoom[0]].url.length > currentZoom[1] + 1) {
        zoom(currentZoom[0], currentZoom[1] + 1)
    }
}
const zoomLeft = () => {
    if (0 < currentZoom[1]) {
        zoom(currentZoom[0], currentZoom[1] - 1)
    }
}


const generator = (galeria, indexStart=0) => {
    galery[galeria].html.innerHTML = "";
    let i = indexStart

    while (i <= (indexStart + liczba) && i < galery[galeria].url.length) {
        galery[galeria].html.innerHTML += `
            <img alt="Obraz Obiektu" onclick="zoom(${galeria}, ${i})" src="${galery[galeria].url[i]}">
        `;
        i++;
    }
    galery[galeria].index = indexStart;
}

const animation = (html, right) => {
    if (right) {
        html.classList.remove("right");
        html.classList.add("right");
    } else {
        html.classList.remove("left");
        html.classList.add("left");
    }
}
const alternator = (nr, boomelan) => {
    let { index, url, html } = galery[nr]
    const length = url.length;
    if (boomelan) {
        if (index + ((liczba + 1)* 2) <= length) {
            index += (liczba + 1);
        } else {
            index = length - (liczba + 1);
        }
    } else {
        if (index >= liczba + 1) {
            index -= (liczba + 1);
        } else {
            index = 0;
        }
    }
    generator(nr, index)
    animation(html, boomelan)
}

generator(0)
generator(1)
generator(2)