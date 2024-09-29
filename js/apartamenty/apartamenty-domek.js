const galleries = Array.from(document.querySelectorAll("[id^='galery-']"));
const zoomDiv = document.getElementById("zoom-div");
const popupDiv = document.getElementById("popup-div");
const screenW = screen.width;

const itemsToShow = screenW > 1340 ? 3 : screenW > 1000 ? 2 : screenW > 700 ? 1 : 0;
let currentZoom = "";

const galleryData = [
    [
        '/apartamenty/img/domek/163-kudowa-zdroj-cichy-zakatek.jpg',
        '/apartamenty/img/domek/164-kudowa-zdroj-cichy-zakatek.jpg',
        '/apartamenty/img/domek/3_4tvfcj2f.jpg',
        '/apartamenty/img/domek/4_cemggisy.jpg',
        '/apartamenty/img/domek/63-kudowa-zdroj-cichy-zakatek_a623324t.jpg',
        '/apartamenty/img/domek/CB6A8155.jpg',
        '/apartamenty/img/domek/CB6A8157.jpg',
        '/apartamenty/img/domek/CB6A8158.jpg',
        '/apartamenty/img/domek/CB6A8160.jpg',
        '/apartamenty/img/domek/IMG_20240704_151722pow.jpg',
        '/apartamenty/img/domek/IMG_20240704_15183POW.jpg',
        '/apartamenty/img/domek/KADR4707KOREKT2800.jpg',
        '/apartamenty/img/domek/pomniejszone_KADR3749.jpg',
        '/apartamenty/img/domek/pomniejszone_KADR4422.jpg',
        '/apartamenty/img/domek/pomniejszone_KADR4457.jpg',
        '/apartamenty/img/domek/pomniejszone_KADR4739.jpg'
    ],
    [
        '/apartamenty/img/wspólne/160-kudowa-zdroj-cichy-zakatek.jpg',
        '/apartamenty/img/wspólne/161-kudowa-zdroj-cichy-zakatek.jpg',
        '/apartamenty/img/wspólne/162-kudowa-zdroj-cichy-zakatek.jpg',
        '/apartamenty/img/wspólne/CB6A8164_xw06xfow.jpg',
        '/apartamenty/img/wspólne/CB6A8174.jpg',
        '/apartamenty/img/galeria/DJI_0909.jpg'

    ]
];

const generateGallery = (galleryIndex, startIndex = 0) => {
    const galleryElement = galleries[galleryIndex];
    const urls = galleryData[galleryIndex];

    galleryElement.innerHTML = urls.slice(startIndex, startIndex + itemsToShow + 1)
        .map((url, index) => `<img alt="Obraz Obiektu" onclick="zoom(${galleryIndex}, ${startIndex + index})" src="${url}">`)
        .join('');

    galleries[galleryIndex].dataset.index = startIndex;
};

const zoom = (galleryIndex, imageIndex) => {
    currentZoom = { galleryIndex, imageIndex };
    popupDiv.classList.remove("hidden");
    zoomDiv.innerHTML = `<img src="${galleryData[galleryIndex][imageIndex]}" alt="Powiększony obraz obiektu" class="my-auto rounded-2xl max-lg:rounded-none shadow-xl object-cover w-auto h-95vh max-lg:h-min max-lg:max-h-75vh max-lg:w-screen">`;
};


const closeZoom = () => {
    popupDiv.classList.add("hidden");
    zoomDiv.innerHTML = "";
};


const zoomRight = () => {
    const { galleryIndex, imageIndex } = currentZoom;
    if (imageIndex < galleryData[galleryIndex].length - 1) {
        zoom(galleryIndex, imageIndex + 1);
    }
};

const zoomLeft = () => {
    const { galleryIndex, imageIndex } = currentZoom;
    if (imageIndex > 0) {
        zoom(galleryIndex, imageIndex - 1);
    }
};


const scrollGallery = (galleryIndex, forward = true) => {
    const galleryElement = galleries[galleryIndex];
    const startIndex = parseInt(galleryElement.dataset.index, 10);
    const urls = galleryData[galleryIndex];
    const maxIndex = urls.length - itemsToShow - 1;

    let newIndex = forward ? startIndex + itemsToShow + 1 : startIndex - itemsToShow - 1;
    newIndex = Math.max(0, Math.min(maxIndex, newIndex));

    generateGallery(galleryIndex, newIndex);
    animateGallery(galleryElement);
};


const animateGallery = (element) => {
    element.classList.add("animate");
    setTimeout(() => element.classList.remove("animate"), 200);
};


galleries.forEach((_, index) => generateGallery(index));