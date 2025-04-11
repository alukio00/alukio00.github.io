class PopupImageZoom extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="popup-div" class="hidden fixed left-0 top-0 w-full h-full flex justify-center items-center flex-row z-30 bg-black bg-opacity-60">
          
            <button onclick="zoomLeft()" type="button" class="left-2 zoom-buttons">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
            </button>
            
            
            
            <div id="zoom-div" class="flex items-center justify-center"></div>
        
          
            <button onclick="zoomRight()" type="button" class="right-2 zoom-buttons">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </button>
           

            <button class="top-2 right-2 zoom-buttons" type="button" onclick="closeZoom()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </button>
   
        </div>
        `;

    };
}
customElements.define("popup-image-zoom", PopupImageZoom);
