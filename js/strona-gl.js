

let currSlide = 0
let interval

const slider = document.getElementById("auto-slider")

const allImgs =  Array.from(slider.querySelectorAll("img"))

const autoSlider = () => {
    const currImg = allImgs[currSlide];
    
   
    currImg.classList.add("hidden");
       
   
    currSlide = allImgs.length <= currSlide + 1 ? 0 : currSlide + 1;
    
    const nextImg = allImgs[currSlide];
    
    nextImg.classList.remove("hidden");
   
};
const setLoop = () => {
    interval = setInterval(() => {
        autoSlider();
    }, 3500);
}
setLoop()

let currentZoom = 0

const zoomDiv = document.getElementById("zoom-div");
const popupDiv = document.getElementById("popup-div");

const body = document.querySelector("body")

const zoom = (index) => {
    body.style.paddingTop = "0px"
    clearInterval(interval)
    currentZoom = index
    popupDiv.classList.remove("hidden");
    zoomDiv.innerHTML = `
    <picture>
        <source media="(max-width:650px)"  srcset="${allImgs[index].src.replace("/full/", "/tel/")}" alt="Powiększony obraz obiektu" class="my-auto rounded-2xl max-lg:rounded-none shadow-xl object-cover w-auto h-95vh max-lg:h-min max-lg:max-h-75vh max-lg:w-screen">
   
        <img src="${allImgs[index].src.replace("/tel/", "/full/")}" alt="Powiększony obraz obiektu" class="my-auto rounded-2xl max-lg:rounded-none shadow-xl object-cover w-auto h-95vh max-lg:h-min max-lg:max-h-75vh max-lg:w-screen">
    </picture>
        `;
};
const closeZoom = () => {
    body.style.paddingTop = "75px"
    popupDiv.classList.add("hidden");
    zoomDiv.innerHTML = "";
    setLoop()
};
const zoomRight = () => {
  
    if (currentZoom < allImgs.length - 1) {
        zoom(currentZoom + 1);
    }
};
const zoomLeft = () => {

    if (currentZoom > 0) {
        zoom(currentZoom - 1);
    }
};


const toggleAtrakcje = (id) => {
    const divList = [
        [
            document.getElementById("atrakcje-list"),
            document.getElementById("atrakcje-img"),
            document.getElementById("atrakcje-arrow")
        ],
        [
            document.getElementById("szlaki-list"),
            document.getElementById("szlaki-img"),
            document.getElementById("szlaki-arrow")
        ],
        [
            document.getElementById("trasy-list"),
            document.getElementById("trasy-img"),
            document.getElementById("trasy-arrow")
        ]
    ];
    const currList = divList[id];

    const img = currList[1];
    const list = currList[0];
    const arrow = currList[2]

    if (list.classList.contains("hidden")) {
        
        list.classList.remove("hidden");
        list.classList.add("animation-atrakcje");
        list.classList.add("flex");
        arrow.classList.remove("rotate-180")

        img.classList.add("animation-atrakcje-img");

        setTimeout(() => {
            img.classList.add("hidden");
            img.classList.remove("animation-atrakcje-img");
        }, 200); 
    } else {
       
        list.classList.add("hidden");
        list.classList.remove("animation-atrakcje");
        list.classList.remove("flex");
        arrow.classList.add("rotate-180")

        img.classList.remove("hidden");
        img.classList.add("animation-atrakcje-img-reverse");

        setTimeout(() => {
            img.classList.remove("animation-atrakcje-img-reverse");
        }, 200); 
    }
};
