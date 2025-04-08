

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


const deleteErrorMessage = () => {
    const errorDiv = document.getElementById("errors-div")

    errorDiv.classList.add("hidden")
    errorDiv.innerHTML = ""
}

const sendEmail = async (event) => {
    event.preventDefault()
    
    const email = document.getElementById("email").value
    const firstName = document.getElementById("name").value
    const lastName = document.getElementById("last-name").value
    const message = document.getElementById("message").value
    
    const formData = JSON.stringify({email, firstName, lastName, message})
    try {
       const res = await fetch("https://europe-central2-light-scarab-439115-h3.cloudfunctions.net/function-1", {
            body: formData,
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json()

        console.log(data)

        const errorDiv = document.getElementById("errors-div")
        const { stan, mess } = data
     
        errorDiv.classList.remove("hidden")

        errorDiv.innerHTML = `<div class="p-4 w-full justify-between items-center flex shadow-lg ${stan ? "bg-green-600" : "bg-red-600"} rounded-md text-white text-lg">${mess}<div onclick="deleteErrorMessage()" class=""><svg class="w-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div></div>`

    } catch (error) {
        console.log(error)
        errorDiv.classList.remove("hidden")

        errorDiv.innerHTML = `<div class="p-4 w-full justify-between items-center flex shadow-lg bg-red-600 rounded-md text-white text-lg">Error<div onclick="deleteErrorMessage()" class=""><svg class="w-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div></div>`

    }

    
        
}



const reviewButtons = Array.from({length:3}, (_, i) => document.getElementById("review-btn-" + (i + 1)))

const reviewDivs = Array.from({length:3}, (_, i) => document.getElementById("review-div-" + (i + 1)))


const changeReviewDiv = (id) => {
    const button = reviewButtons[id]
    const div = reviewDivs[id]

    reviewButtons.forEach(el => {
        el.classList.replace("border-gray-800", "border-transparent")

    })
    reviewDivs.forEach(el => {
        el.classList.replace("flex", "hidden")
    })

    if (button.classList.contains("border-transparent")) {
        button.classList.replace("border-transparent", "border-gray-800")
        div.classList.replace("hidden", "flex")
    } else {
        button.classList.replace("border-gray-800", "border-transparent")
        div.classList.replace("flex", "hidden")
    }

}

reviewButtons.forEach((el, i) => el.addEventListener("click", () => {
    changeReviewDiv(i)
}))