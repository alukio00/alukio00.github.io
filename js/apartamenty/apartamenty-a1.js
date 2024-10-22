const gallery = document.getElementById("gallery")
const galleryTel = document.getElementById("gallery-tel")
const zoomDiv = document.getElementById("zoom-div");
const popupDiv = document.getElementById("popup-div");
const screenW = screen.width;


let currentZoom = "";
let currentTel = 0

const galleryData = [
        '/apartamenty/img/a1/151-kudowa-zdroj-cichy-zakatekBOK.jpg',
        '/apartamenty/img/a1/156-kudowa-zdroj-cichy-zakatek.jpg',
        '/apartamenty/img/a1/1B0A3938.jpg',
        '/apartamenty/img/a1/1B0A3941.jpg',
        '/apartamenty/img/a1/1B0A3947.jpg',
        '/apartamenty/img/a1/1B0A3959.jpg',
        '/apartamenty/img/a1/1B0A3976.jpg',
        '/apartamenty/img/a1/1B0A3980-HDR.jpg', 
        '/apartamenty/img/a1/1B0A3986.jpg',
        '/apartamenty/img/a1/37-kudowa-zdr-j-cichy-zak-tek.jpg',
        '/apartamenty/img/a1/EC3A5271.jpg',
        '/apartamenty/img/a1/EC3A5276.jpg',
        '/apartamenty/img/a1/EC3A5304.jpg',
        '/apartamenty/img/wspólne/160-kudowa-zdroj-cichy-zakatek.jpg',
        '/apartamenty/img/wspólne/161-kudowa-zdroj-cichy-zakatek.jpg',
        '/apartamenty/img/wspólne/162-kudowa-zdroj-cichy-zakatek.jpg',
        '/apartamenty/img/wspólne/CB6A8164_xw06xfow.jpg',
        '/apartamenty/img/wspólne/CB6A8174.jpg',
        '/apartamenty/img/galeria/DJI_0909.jpg'
]

const generateGallery = () => {
    
    gallery.innerHTML = galleryData.map((url, index) => `<img alt="Obraz Obiektu" onclick="zoom(${index})" src="${url}">`)
        .join('');

   
};
const generateGalleryTel = () => {
    console.log(currentTel)
    galleryTel.innerHTML =`<img alt="Obraz Obiektu" onclick="zoom(${currentTel})" src="${galleryData[currentTel]}">`
       

   
};
const prev = () => {
    if (currentTel > 0) {
        currentTel--
        generateGalleryTel()
    }
}
const next = () => {
    if (currentTel < galleryData.length - 1) {
        currentTel++
        generateGalleryTel()
    }
}

const zoom = (index) => {
    currentZoom = index
    popupDiv.classList.remove("hidden");
    zoomDiv.innerHTML = `<img src="${galleryData[index]}" alt="Powiększony obraz obiektu" class="my-auto rounded-2xl max-lg:rounded-none shadow-xl object-cover w-auto h-95vh max-lg:h-min max-lg:max-h-75vh max-lg:w-screen">`;
};


const closeZoom = () => {
    popupDiv.classList.add("hidden");
    zoomDiv.innerHTML = "";
};


const zoomRight = () => {
  
    if (currentZoom < galleryData.length - 1) {
        zoom(currentZoom + 1);
    }
};

const zoomLeft = () => {

    if (currentZoom > 0) {
        zoom(currentZoom - 1);
    }
};



screenW > 768 ? generateGallery() : generateGalleryTel();
