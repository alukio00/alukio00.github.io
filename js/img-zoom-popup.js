class PopupImageZoom extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="popup-div" class="hidden fixed left-0 w-full h-full flex justify-center items-center flex-row z-30 bg-black bg-opacity-60">
          
            <button onclick="zoomLeft()" type="button" class="border-2 border-gray-800 hover:bg-gray-400 max-lg:hover:bg-white max-lg:bg-opacity-50 duration-200 absolute left-2  flex cursor-pointer bg-white rounded-full text-gray-800 justify-center items-center"><i class="material-symbols-outlined">chevron_left</i></button>
            


            <div id="zoom-div" class="flex items-center justify-center"></div>

          
            <button onclick="zoomRight()" type="button" class="border-2 border-gray-800 hover:bg-gray-400 max-lg:hover:bg-white max-lg:bg-opacity-50 duration-200 absolute right-2  cursor-pointer flex bg-white rounded-full text-gray-800 justify-center items-center"><i class="material-symbols-outlined">chevron_right</i></button>
           

            <div id="popup-btn" class="flex z-40 fixed top-2 right-2">
                <button class="text-gray-800 material-symbols-outlined rounded-full border-2 hover:bg-gray-400 max-lg:hover:bg-white max-lg:bg-opacity-50 duration-200 border-gray-800 bg-white" type="button" onclick="closeZoom()">close</button>
            </div>
        </div>
        `;

    };
}
customElements.define("popup-image-zoom", PopupImageZoom);
