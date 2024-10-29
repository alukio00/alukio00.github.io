const gallery = document.getElementById("gallery")
const galleryTel = document.getElementById("gallery-tel")
const zoomDiv = document.getElementById("zoom-div");
const popupDiv = document.getElementById("popup-div");
const screenW = screen.width;


let currentZoom = "";
let currentTel = 0


const selectPictuires = [ 
    [
        '/img/a1/156-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/a1/151-kudowa-zdroj-cichy-zakatekBOK.jpg',
        '/img/a1/1B0A3959.jpg',
        '/img/a1/1B0A3947.jpg',
        '/img/a1/EC3A5271.jpg',
        '/img/a1/1B0A3938.jpg',
        '/img/a1/EC3A5276.jpg',
        '/img/a1/1B0A3941.jpg',
        '/img/a1/1B0A3986.jpg',
        '/img/a1/1B0A3980-HDR.jpg', 
        '/img/a1/EC3A5304.jpg',
        '/img/a1/1B0A3976.jpg',
        '/img/a1/37-kudowa-zdr-j-cichy-zak-tek.jpg',
        '/img/wspólne/160-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/wspólne/161-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/wspólne/162-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/wspólne/CB6A8164_xw06xfow.jpg',
        '/img/wspólne/CB6A8174.jpg',
    ],
    [
        '/img/a2/1B0A4031 (1).jpg',
        '/img/a2/1B0A4056.jpg',
        '/img/a2/1B0A4027.jpg',
        '/img/a2/1B0A4041.jpg',
        '/img/a2/EC3A5321.jpg',
        '/img/a2/1B0A4057k.jpg',
        '/img/a2/EC3A5311.jpg',
        '/img/a2/158-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/a2/157-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/a2/10.jpg',
        '/img/a2/11.jpg',
        '/img/a2/EC3A5304lustr.jpg',
        '/img/a2/12.jpg',
        '/img/wspólne/160-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/wspólne/161-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/wspólne/162-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/wspólne/CB6A8164_xw06xfow.jpg',
        '/img/wspólne/CB6A8174.jpg',
    ],
    [
        '/img/a3/52-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/a3/53-kudowa-zdroj-cichy-zakatek_rsf3gr71.jpg',
        '/img/a3/51-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/a3/1AA3LUST.jpg',
        '/img/a3/54-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/a3/55-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/a3/58-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/a3/56-kudowa-zdroj-cichy-zakatek.jpg',

        '/img/wspólne/160-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/wspólne/161-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/wspólne/162-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/wspólne/CB6A8164_xw06xfow.jpg',
        '/img/wspólne/CB6A8174.jpg',

    ],
    [
        '/img/a4/DSC0780.jpg',
        '/img/a4/CB6A8139-Edit.jpg',
        '/img/a4/1B0A4031 (1).jpg',
        '/img/a4/1B0A4056.jpg',
        '/img/a4/1B0A4027.jpg',
        '/img/a4/1B0A4041.jpg',
        '/img/a4/EC3A5321.jpg',
        '/img/a4/159-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/a4/157-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/a4/158-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/a4/63-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/a4/CB6A8143.jpg',
        '/img/a4/CB6A8145-Edit.jpg',
        '/img/a4/59-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/a4/EC3A5304lustr.jpg',
        '/img/a4/61-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/wspólne/160-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/wspólne/161-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/wspólne/162-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/wspólne/CB6A8164_xw06xfow.jpg',
        '/img/wspólne/CB6A8174.jpg',
   
    ],
    [
        '/img/a5/61-kudowa-zdroj-cichy-zakatek_31tu4e7d.jpg',
        '/img/a5/56-kudowa-zdroj-cichy-zakatek_t920yj9s.jpg',
        '/img/a5/55-kudowa-zdroj-cichy-zakatek_q26cm0xb.jpg',
        '/img/a5/1.jpg',
        '/img/a5/2.jpg',
        '/img/a5/5.jpg',
        '/img/a5/6.jpg',
        '/img/a5/3.jpg',
        '/img/a5/4.jpg',
        '/img/a5/7.jpg',
        '/img/a5/8_1ryyvtpb.jpg',
        '/img/a5/IMG20240603184114.jpg',
        '/img/a5/kaczKadr.jpg',
        '/img/a5/53-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/a5/IMG20240602204958.jpg',
    ],
    [
        '/img/domek/163-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/domek/164-kudowa-zdroj-cichy-zakatek.jpg',
        '/img/domek/CB6A8155.jpg',
        '/img/domek/CB6A8158.jpg',
        '/img/domek/CB6A8157.jpg',
        '/img/domek/3_4tvfcj2f.jpg',
        '/img/domek/4_cemggisy.jpg',
        '/img/domek/CB6A8160.jpg',
        '/img/domek/KADR4707KOREKT2800.jpg',
        '/img/domek/pomniejszone_KADR4457.jpg',
        '/img/domek/pomniejszone_KADR4739.jpg',
        '/img/domek/pomniejszone_KADR4422.jpg',
        '/img/domek/pomniejszone_KADR3749.jpg',
        '/img/domek/IMG_20240704_151722pow.jpg',
        '/img/domek/IMG_20240704_15183POW.jpg',
        '/img/domek/63-kudowa-zdroj-cichy-zakatek_a623324t.jpg',
    ]
]
const galleryData = selectPictuires[Number(document.querySelector("main").dataset.number)]

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




screenW >= 768 ? generateGallery() : generateGalleryTel();
