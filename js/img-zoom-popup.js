class PopupImageZoom extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="popup-div" class="hidden fixed left-0 w-full h-full flex justify-between max-lg:justify-center items-center flex-row z-30 bg-black bg-opacity-60">
            <div class="max-lg:hidden block">
                <button onclick="zoomLeft()" type="button" class="border-2 hover:bg-gray-900 mx-4 flex cursor-pointer bg-gray-800 rounded-md text-white justify-center align-middle"><i class="material-symbols-outlined">chevron_left</i></button>
            </div>

            <div class="max-lg:flex hidden fixed bottom-4 w-full gap-4 justify-center">
                <div>
                    <button onclick="zoomLeft()" type="button" class="border-2 z-50 flex px-4 py-2 text-xl cursor-pointer bg-gray-800 rounded-md text-white justify-center align-middle">Wróć</button>
                </div>
                            
                <div>
                    <button onclick="zoomRight()" type="button" class="border-2 z-50 flex px-4 py-2 text-xl cursor-pointer bg-gray-800 rounded-md text-white justify-center align-middle">Dalej</button>
                </div>
            </div>

            <div id="zoom-div" class="flex items-center justify-center mx-0"></div>

            <div class="max-lg:hidden block">
                <button onclick="zoomRight()" type="button" class="border-2 hover:bg-gray-900 mx-4 cursor-pointer flex bg-gray-800 rounded-md text-white justify-center align-middle"><i class="material-symbols-outlined">chevron_right</i></button>
            </div>

            <div id="popup-btn" class="flex z-40 fixed top-2 right-2">
                <button class="text-white material-symbols-outlined rounded-lg border-2 bg-gray-800" type="button" onclick="closeZoom()">close</button>
            </div>
        </div>
        `;

    };
}
customElements.define("popup-image-zoom", PopupImageZoom);
