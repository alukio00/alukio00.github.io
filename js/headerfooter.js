class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="z-10 fixed left-0 h-full text-white flex flex-row justify-start max-lg:hidden shadow-div">
                <div class="flex flex-col align-middle justify-center gap-5 bg-gray-800 h-full w-16">
                    <div class="nav-bar-icons"><a href="/"><i class="material-symbols-outlined">home</i></a><div class="sidebar-child">
                        <p>Strona Główna</p>
                    </div></div>
                    <div class="nav-bar-icons"><i id="icon-show-popup" class="material-symbols-outlined cursor-pointer popup-activate">apartment</i><div class="sidebar-child">
                        <p>Nasza Oferta</p>
                    </div></div>
                    <div class="nav-bar-icons"><a href="/galeria/"><i class="material-symbols-outlined">photo_library</i></a><div class="sidebar-child">
                        <p>Galeria Zdjęć</p>
                    </div></div>
                    <div class="nav-bar-icons"><a href="/cennik/"><i class="material-symbols-outlined">payments</i></a><div class="sidebar-child">
                        <p>Cennik</p>
                    </div></div>
                    <div class="nav-bar-icons"><a href="/rezerwacja/"><i class="material-symbols-outlined">chat</i></a><div class="sidebar-child">
                        <p>Rezerwacja</p>
                    </div></div>
                </div>
            </header>

            <header class="hidden z-10 fixed left-0 h-full max-lg:flex text-white flex-row justify-start">
                <div class="w-full">
                    <i id="menu-icon" class="material-symbols-outlined fixed top-3 left-3 z-20 p-1.5 rounded-lg border flex bg-gray-800">menu</i>
                    <div id="mobile-drop-right" class="hidden flex flex-col justify-start py-24 gap-6 bg-gray-800 bg-opacity-95 h-full w-72 min-w-60 max-w-60% p-3 animate-slideInRight origin-left">
                        <a class="mobile-menu-a" href="/">
                            <i class="material-symbols-outlined">home</i><p>Strona Główna</p>
                        </a>
                        <a class="mobile-menu-a" href="/galeria/">
                            <i class="material-symbols-outlined">photo_library</i><p>Galeria Zdjęć</p>
                        </a>
                        <div class="flex flex-col gap-4">
                            <a id="apartamenty-drop-btn" class="mobile-menu-a" >
                                <i class="material-symbols-outlined">apartment</i><p>Nasza Oferta</p><i id="apartamenty-drop" class="material-symbols-outlined">keyboard_arrow_down</i>
                            </a>
                            <div id="apartamenty-drop-div" class="hidden flex-col gap-3 ml-2">
                                <a href="/apartament-dwupoziomowy-nr1/">Apartament Dwupoziomowy Nr. 1</a>
                                <a href="/apartament-dwupoziomowy-nr2/">Apartament Dwupoziomowy Nr. 2</a>
                                <a href="/apartament-dwupoziomowy-nr3/">Apartament Dwupoziomowy Nr. 3</a>
                                <a href="/apartament-dwupoziomowy-nr4/">Apartament Dwupoziomowy Nr. 4</a>
                                <a href="/apartament-z-2-sypialniami/">Apartament z 2 Sypialniami</a>
                                <a href="/domek-wolnostojacy/">Domek Drewniany</a>
                    
                            </div>
                        </div>
                        
                        <div class="flex flex-col gap-4">
                            <a id="atrakcje-btn" class="mobile-menu-a" >
                                <i class="material-symbols-outlined">hiking</i><p>Atrakcje w Okolicy</p><i id="atrakcje-drop" class="material-symbols-outlined">keyboard_arrow_down</i>
                            </a>
                            <div id="atrakcje-div" class="hidden flex-col gap-3 ml-2">
                                <a href="/atrakcje/">Atrakcje Turystyczne</a>
                                <a href="/szlaki/">Szlaki Piesze</a>
                                <a href="/trasy-rowerowe/">Trasy Rowerowe</a>
                            </div>
                        </div>
                        <a class="mobile-menu-a" href="/cennik/">
                            <i class="material-symbols-outlined">payments</i><p>Cennik</p>
                        </a>
                        <a class="mobile-menu-a" href="/rezerwacja/">
                            <i class="material-symbols-outlined">chat</i><p>Rezerwacja</p>
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
        const atrakcjeBtn = this.querySelector("#atrakcje-btn")
        const atrakcjeDiv = this.querySelector("#atrakcje-div")
        const atrakcjeArrow = this.querySelector("#atrakcje-drop")

        atrakcjeBtn.addEventListener("click", () => {
            atrakcjeDiv.classList.toggle("hidden")
            atrakcjeDiv.classList.toggle("flex")
            atrakcjeArrow.classList.toggle("rotate-180")
        })
        const apartamentyBtn = this.querySelector("#apartamenty-drop-btn")
        const apartamentyDiv = this.querySelector("#apartamenty-drop-div")
        const apartamentyArrow = this.querySelector("#apartamenty-drop")

        apartamentyBtn.addEventListener("click", () => {
            apartamentyDiv.classList.toggle("hidden")
            apartamentyDiv.classList.toggle("flex")
            apartamentyArrow.classList.toggle("rotate-180")
        })
    }
}
customElements.define("my-header", Header);

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                    <footer class="bg-gray-800 text-white gap-5 flex flex-col">
                        <div class="p-10 flex flex-col justify-start w-11/12 max-xl:w-full">
                            <h2 class="text-4xl max-sm:text-3xl font-glowna">Apartamenty "Cichy Zakątek"</h2>
                            <hr class="border-2 h-0.5 w-4/12 my-4 border-white">
                            <div class="flex flex-row justify-between flex-wrap gap-8">
                                <div class="flex flex-col justify-start w-96">
                                    <h3 class="text-2xl my-2">Kontakt:</h3>
                                    <div class="flex flex-col gap-2">
                                        <p><strong>Telefon:</strong> 505 720 041</p>
                                        <p><strong>Email:</strong> info@cichyzakatek.com.pl</p>
                                        
                                        <p><strong>Adres:</strong> ul. Tadeusza Kościuszki 112C <br>57-350 Kudowa-Zdrój</p>
                                    </div>
                                </div>
                                <div class="flex flex-col justify-start w-96">
                                    <h3 class="text-2xl my-2">Nasza Oferta:</h3>
                                    <ul class="list-disc list-inside gap-2 flex flex-col">
                                        <li><a href="/apartament-dwupoziomowy-nr1/">Apartament Dwupoziomowy nr 1</a></li>
                                        <li><a href="/apartament-dwupoziomowy-nr2/">Apartament Dwupoziomowy nr 2</a></li>
                                        <li><a href="/apartament-dwupoziomowy-nr3/">Apartament Dwupoziomowy nr 3</a></li>
                                        <li><a href="/apartament-dwupoziomowy-nr4/">Apartament Dwupoziomowy nr 4</a></li>
                                        <li><a href="/apartament-z-2-sypialniami/">Apartament z 2 sypialniami</a></li>
                                        <li><a href="/domek-wolnostojacy/">Domek z 2 sypialniami</a></li>
                                    </ul>
                                </div>
                                <div class="flex flex-col justify-start w-96">
                                    <h3 class="text-2xl my-2">Strony:</h3>
                                    <ul class="list-disc list-inside flex flex-col gap-2">
                                        <li><a href="/">Strona Główna</a></li>
                                        <li><a href="/galeria/">Galeria</a></li>
                                        <li><a href="/cennik/">Cennik</a></li>
                                        <li><a href="/rezerwacja/">Rezerwacja</a></li>
                                        <li><a href="/regulamin/">Regulamin</a></li>
                                        <li><a href="/polityka-prywatnosci/">Polityka Prywatności</a></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                        <div class="p-3">
                            <p>&copy; 2024 Apartamenty CichyZakątek. Wszelkie prawa zastrzeżone.</p>
                        </div>
                    </footer>
                    <div id="cookies-div" class="hidden fixed bottom-5 left-24 max-lg:left-5 flex-col gap-2 bg-white rounded-xl shadow-xl p-4 w-96 max-w-full">
                        <h3 class="text-3xl font-semibold">Cookies</h3>
                        <p class="text-base">Ta strona używa plików cookies, w celu obserwowania ruchu na naszej stronie stronie. Aby zarządać swoimi ciasteczkami <a class="underline text-blue-700" href="/polityka-prywatnosci/#cookies">Kliknij Tutaj</a>.</p>
                        <form onsubmit="acceptCookies(event)" class="flex flex-col gap-4">
                            <div class="flex gap-4 items-center">
                                <button data-agreed="1" type="submit" class="w-full rounded-full py-2 bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800 duration-200">Zgadzam się</button>
                                <button data-agreed="0" type="submit" class="w-full rounded-full py-2 bg-white text-gray-800 border-2 border-gray-800 hover:bg-gray-800 hover:text-white duration-200">Nie zgadzam się</button>
                           
                            </div>
                        </form>
                    </div>
        `
    }
}

customElements.define("my-footer", Footer);

class PopupAparts extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="popup-aparts" class="hidden z-30 fixed top-0 left-0 w-full py-4 h-full bg-black bg-opacity-50 flex flex-row justify-center items-center gap-5 max-xl:gap-3">
                <i id="p-close" class="fixed top-5 right-5 cursor-pointer text-white material-symbols-outlined p-2 rounded-lg border bg-gray-800">close</i>
                
                <div id="changing-div" class="popup-link cursor-pointer">
                    <div class="justify-start">
                        <img id="lista-hide" loading="lazy" src="../img/a1/1B0A3938.jpg" alt="Atrakcje Turystyczne zdjęcie">
                        <h3 class="text-xl font-medium p-4">Apartamenty Dwupoziomowe</h3>
                      
                    </div>
                </div>
                <a  href="/apartament-z-2-sypialniami/" class="popup-link">
                    <div>
                        <img loading="lazy" src="../img/a5/1.jpg" alt="Atrakcje Turystyczne zdjęcie">
                        <h3 class="text-xl font-medium p-4">Apartament z 2 sypialniami</h3>
                    </div>
                </a>
    
                <a  href="/domek-wolnostojacy/" class="popup-link">
                    <div>
                        <img loading="lazy" src="../img/domek/163-kudowa-zdroj-cichy-zakatek.jpg" alt="Atrakcje Turystyczne zdjęcie">
                        <h3 class="text-xl font-medium p-4">Domek Drewniany</h3>
                    </div>
                </a>
                <div id="lista-show" class="hidden bg-white flex items-start flex-col gap-4 w-500 rounded-xl p-4">
                    <h3 class="text-2xl font-medium">Apartamenty Dwupoziomowe</h3>
                     <hr class="w-full h-0.5 border border-gray-800 bg-gray-800">
                    <ul class="flex gap-1 flex-col">
                       
                        <li><i class="material-symbols-outlined">apartment</i><a href="/apartament-dwupoziomowy-nr1/">Apartament Nr 1</li>
                        <li><i class="material-symbols-outlined">apartment</i><a href="/apartament-dwupoziomowy-nr2/">Apartament Nr 2</li>
                        <li><i class="material-symbols-outlined">apartment</i><a href="/apartament-dwupoziomowy-nr3/">Apartament Nr 3</li>
                        <li><i class="material-symbols-outlined">apartment</i><a href="/apartament-dwupoziomowy-nr4/">Apartament Nr 4</li>
                    </ul>
                </div>
            </div>
        `;
       
        const close = this.querySelector("#p-close"),
        popupDiv = this.querySelector("#popup-aparts"),
        popupBtn1 = document.querySelectorAll(".popup-activate"),
        changingDiv = this.querySelector("#changing-div"),
        hideOther = this.querySelectorAll(".popup-link"),
        listaShow = this.querySelector("#lista-show");

        changingDiv.addEventListener("click", () => {
            hideOther.forEach(item => {
                item.classList.add("hidden");
            })
            listaShow.classList.remove("hidden");

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
 
  
        }
        popupBtn1.forEach(item => {
            item.addEventListener("click", removeH);
        })
        
    };
}
customElements.define("my-popup-ap", PopupAparts);



const getCookies = () => {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split("=");
        if (name === "acceptedCookies") return;
    }
    document.getElementById("cookies-div").classList.replace("hidden", "flex");
}

setTimeout(getCookies, 100);

const acceptCookies = (event) => {
    event.preventDefault();
    const agreed = Number(event.submitter.dataset.agreed);


    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);

    if (agreed) {
        
        document.cookie = `acceptedCookies=1; expires=${expires.toUTCString()}; path=/`;
    } else {
        document.cookie = `acceptedCookies=0; expires=${expires.toUTCString()}; path=/`;
    }

    document.getElementById("cookies-div").classList.add("hidden");
}