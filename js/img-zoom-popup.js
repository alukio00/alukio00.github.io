class PopupImageZoom extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="popup-div" class="hidden fixed left-0 w-full h-full flex justify-center items-center flex-row z-30 bg-black bg-opacity-60">
          
        <button onclick="zoomLeft()" type="button" class="border-2 border-gray-800 hover:bg-gray-400 max-lg:hover:bg-white max-lg:bg-opacity-50 duration-200 absolute left-2  flex p-2 cursor-pointer bg-white rounded-full justify-center items-center">
            <svg class="w-10 h-10 fill-gray-800 max-md:w-7 max-md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
        </button>
        
        
        
        <div id="zoom-div" class="flex items-center justify-center"></div>
        
          
            <button onclick="zoomRight()" type="button" class="border-2 border-gray-800 hover:bg-gray-400 max-lg:hover:bg-white max-lg:bg-opacity-50 duration-200 absolute right-2  p-2 cursor-pointer flex bg-white rounded-full justify-center items-center">
                <svg class="w-10 h-10 fill-gray-800 max-md:w-7 max-md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </button>
           

            <div id="popup-btn" class="flex z-40 fixed top-2 right-2">
                <button class="flex justify-center items-center rounded-full p-2 border-2 hover:bg-gray-400 max-lg:hover:bg-white max-lg:bg-opacity-50 duration-200 border-gray-800 bg-white" type="button" onclick="closeZoom()">
                    <svg class="w-9 h-9 fill-gray-800 max-md:w-7 max-md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </button>
            </div>
        </div>
        `;

    };
}
customElements.define("popup-image-zoom", PopupImageZoom);
