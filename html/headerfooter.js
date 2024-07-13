class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="z-10 fixed left-0 h-full text-white flex flex-row justify-start max-md:hidden shadow-div">
                <div class="flex flex-col align-middle justify-center gap-5 bg-gray-800 h-full w-16">
                    <div class="nav-bar-icons"><a href="index.html"><i class="material-symbols-outlined">home</i></a><div class="sidebar-child">
                        <p>Strona Główna</p>
                    </div></div>
                    <div class="nav-bar-icons"><i id="icon-show-popup" class="material-symbols-outlined cursor-pointer popup-activate">apartment</i><div class="sidebar-child">
                        <p>Apartamenty</p>
                    </div></div>
                    <div class="nav-bar-icons"><a href="galeria.html"><i class="material-symbols-outlined">photo_library</i></a><div class="sidebar-child">
                        <p>Galeria Zdjęć</p>
                    </div></div>
                    <div class="nav-bar-icons"><a href="cennik.html"><i class="material-symbols-outlined">payments</i></a><div class="sidebar-child">
                        <p>Cennik</p>
                    </div></div>
                    <div class="nav-bar-icons"><a href="kontakt.html"><i class="material-symbols-outlined">chat</i></a><div class="sidebar-child">
                        <p>Kontakt</p>
                    </div></div>
                </div>
            </header>

            <header class="z-10 fixed left-0 h-full max-md:flex hidden w-full text-white flex-row justify-start">
                <div class="w-full">
                    <i id="menu-icon" class="material-symbols-outlined fixed top-3 left-3 z-20 p-1.5 rounded-lg border flex bg-gray-800">menu</i>
                    <div id="mobile-drop-right" class="hidden flex flex-col justify-start py-24 gap-6 bg-gray-800 bg-opacity-95 h-full w-8/12 max-w-80 p-3 animate-slideInRight origin-left">
                        <a class="mobile-menu-a" href="index.html">
                            <i class="material-symbols-outlined">home</i><p>Strona Główna</p>
                        </a>
                        <a class="mobile-menu-a popup-activate">
                            <i id="icon-show-popup2" class="material-symbols-outlined">apartment</i><p>Apartamenty</p>
                        </a>
                        <a class="mobile-menu-a" href="galeria.html">
                            <i class="material-symbols-outlined">photo_library</i><p>Galeria Zdjęć</p>
                        </a>
                        <a class="mobile-menu-a" href="cennik.html">
                            <i class="material-symbols-outlined">payments</i><p>Cennik</p>
                        </a>
                        <a class="mobile-menu-a" href="kontakt.html">
                            <i class="material-symbols-outlined">chat</i><p>Kontakt</p>
                        </a>
                    </div>
                </div>
            </header>
        `

        const menuIcon = this.querySelector("#menu-icon");
        const mobileRight = this.querySelector("#mobile-drop-right");

        menuIcon.addEventListener("click", () => {
            mobileRight.classList.toggle("hidden");
            if (menuIcon.textContent == "close") {
                menuIcon.textContent = "menu";
            } else {
                menuIcon.textContent = "close";
            }
        });
    }
}
customElements.define("my-header", Header);

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                    <footer class="bg-gradient-to-bl from-gray-700 to-gray-800 text-white flex flex-col">
                        <div class="p-10 flex flex-col justify-start w-11/12 max-xl:w-full">
                            <h2 class="text-3xl">Apartamenty Cichy Zakątek</h2>
                            <hr class="border-2 h-0.5 w-4/12 my-4 border-white">
                            <div class="flex flex-row justify-between flex-wrap gap-8">
                                <div class="flex flex-col justify-start w-96">
                                    <h3 class="text-2xl my-2">Informacje:</h3>
                                    <p><strong>Adres:</strong> Tadeusza Kościuszki Kudowa-Zdrój</p>
                                    <p><strong>Telefon:</strong> 123 456 789</p>
                                    <p><strong>Email:</strong> kontakt@hotel-luksusowy.pl</p>
                                </div>
                                <div class="flex flex-col justify-start w-96">
                                    <h3 class="text-2xl my-2">Apartamenty:</h3>
                                    <ul>
                                        <li class="list-disc list-inside"><a href="a1.html">Apartament Dwupoziomowy nr 1</a></li>
                                        <li class="list-disc list-inside"><a href="a2.html">Apartament Dwupoziomowy nr 2</a></li>
                                        <li class="list-disc list-inside"><a href="a3.html">Apartament Dwupoziomowy nr 3</a></li>
                                        <li class="list-disc list-inside"><a href="a4.html">Apartament Dwupoziomowy nr 4</a></li>
                                        <li class="list-disc list-inside"><a href="a5.html">Apartament Dwupokojowy</a></li>
                                        <li class="list-disc list-inside"><a href="domek.html">Domek Drewniany</a></li>
                                    </ul>
                                </div>
                                <div class="flex flex-col justify-start w-96">
                                    <h3 class="text-2xl my-2">Strony:</h3>
                                    <ul>
                                        <li class="list-disc list-inside"><a href="index.html">Strona Główna</a></li>
                                        <li class="list-disc list-inside"><a href="galeria.html">Galeria</a></li>
                                        <li class="list-disc list-inside"><a href="cennik.html">Cennik</a></li>
                                        <li class="list-disc list-inside"><a href="kontakt.html">Kontakt</a></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                        <div class="p-2">
                            <p>&copy; 2024 Apartamenty CichyZakątek. Wszelkie prawa zastrzeżone.</p>
                        </div>
                    </footer>
        `
    }
}

customElements.define("my-footer", Footer);

class PopupAparts extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="popup-aparts" class="hidden z-30 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-row justify-center items-center gap-8 max-lg:flex-col">
                <i id="p-close" class="fixed top-5 right-5 cursor-pointer text-white material-symbols-outlined p-2 rounded-lg border bg-gray-800">close</i>
                <div id="changing-div" class="popup-ap popup-link pb-0 cursor-pointer">
                    <h3 class="text-2xl font-medium text-wrap">Apartament Dwupoziomowy</h3>
                    <hr class="border-2 h-0.5 w-8/12 border-gray-800">
                    <ul id="lista-hide" class="text-gray-700">
                        <li><i class="material-symbols-outlined">table</i>Łóżko małżeńskie</li>
                        <li><i class="material-symbols-outlined"></i>Łóżko dziecięce</li>
                        <li><i class="material-symbols-outlined">skillet</i>Aneks Kuchenny</li>
                    </ul>
                    <ul id="lista-show" class="hidden cursor-pointer">
                        <li><i class="material-symbols-outlined">apartment</i><a href="/html/a1.html">Apartament Nr 1</li>
                        <li><i class="material-symbols-outlined">apartment</i><a href="/html/a2.html">Apartament Nr 2</li>
                        <li><i class="material-symbols-outlined">apartment</i><a href="/html/a3.html">Apartament Nr 3</li>
                        <li><i class="material-symbols-outlined">apartment</i><a href="/html/a4.html">Apartament Nr 4</li>
                    </ul>
                </div>
                <a class="popup-link" href="/html/a5.html"><div class="popup-ap">
                    <h3 class="text-2xl font-medium text-wrap">Apartament Dwupokojowy</h3>
                    <hr class="border-2 h-0.5 w-8/12 border-gray-800">
                    <ul class="text-gray-700">
                        <li><i class="material-symbols-outlined"></i>Łóżko małżeńskie</li>
                        <li><i class="material-symbols-outlined"></i>Łóżko dziecięce</li>
                        <li><i class="material-symbols-outlined">skillet</i>Aneks Kuchenny</li>
                    </ul>
                </div></a>
                <a class="popup-link" href="/html/domek.html"><div class="popup-ap">
                    <h3 class="text-2xl font-medium text-wrap">Domek Drewniany</h3>
                    <hr class="border-2 h-0.5 w-8/12 border-gray-800">
                    <ul class="text-gray-700">
                        <li><i class="material-symbols-outlined"></i>Łóżko małżeńskie</li>
                        <li><i class="material-symbols-outlined"></i>Łóżko dziecięce (Piętrowe)</li>
                        <li><i class="material-symbols-outlined">skillet</i>Aneks Kuchenny</li>
                    </ul>
                </div></a>
            </div>
        `;
        const close = this.querySelector("#p-close"),
        popupDiv = this.querySelector("#popup-aparts"),
        popupBtn1 = document.querySelectorAll(".popup-activate"),
        changingDiv = this.querySelector("#changing-div"),
        hideOther = this.querySelectorAll("a.popup-link"),
        listaHide = this.querySelector("#lista-hide"),
        listaShow = this.querySelector("#lista-show");

        changingDiv.addEventListener("click", () => {
            hideOther.forEach(item => {
                item.classList.add("hidden");
            })
            listaShow.classList.remove("hidden");
            listaHide.classList.add("hidden");
            changingDiv.classList.remove("cursor-pointer")
        })



        close.addEventListener("click", () => {
            popupDiv.classList.add("hidden");
        })
        const removeH = () => {
            popupDiv.classList.remove("hidden");
            hideOther.forEach(item => {
                item.classList.remove("hidden");
            })
            listaShow.classList.add("hidden");
            listaHide.classList.remove("hidden");
            changingDiv.classList.add("cursor-pointer")
        }
        popupBtn1.forEach(item => {
            item.addEventListener("click", removeH);
        })
        
    };
}
customElements.define("my-popup-ap", PopupAparts);
