class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="z-10 fixed left-0 h-full text-white flex flex-row justify-start max-lg:hidden shadow-div">
                <div class="flex flex-col align-middle justify-center gap-5 bg-gray-800 h-full w-16">
                    <div class="nav-bar-icons">
                        <a href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></a>
                        <div class="sidebar-child">
                            <p>Strona Główna</p>
                        </div>
                    </div>
                    <div class="nav-bar-icons">
                        <svg class="cursor-pointer popup-activate" id="icon-show-popup" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>
                        <div class="sidebar-child">
                            <p>Nasza Oferta</p>
                        </div>
                    </div>
                    <div class="nav-bar-icons">
                        <a href="/galeria/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-400h400L622-580l-92 120-62-80-108 140Zm-40 160q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg></a>
                        <div class="sidebar-child">
                            <p>Galeria Zdjęć</p>
                        </div>
                    </div>
                    <div class="nav-bar-icons">
                        <a href="/cennik/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg></a>
                        <div class="sidebar-child">
                            <p>Cennik</p>
                        </div>
                    </div>
                    <div class="nav-bar-icons">
                        <a href="/rezerwacja/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg></a>
                        <div class="sidebar-child">
                            <p>Rezerwacja</p>
                        </div>
                    </div>
                    <div class="nav-bar-icons">
                        <svg class="cursor-pointer popup-activate-2" id="icon-show-popup-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m280-40 123-622q6-29 27-43.5t44-14.5q23 0 42.5 10t31.5 30l40 64q18 29 46.5 52.5T700-529v-71h60v560h-60v-406q-48-11-89-35t-71-59l-24 120 84 80v300h-80v-240l-84-80-72 320h-84Zm17-395-85-16q-16-3-25-16.5t-6-30.5l30-157q6-32 34-50.5t60-12.5l46 9-54 274Zm243-305q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z"/></svg>
                        <div class="sidebar-child">
                            <p>Atrakcje w Okolicy</p>
                        </div>
                    </div>
                    
                </div>
            </header>

            <header class="hidden z-10 fixed left-0 h-full max-lg:flex text-white flex-row justify-start">
                <div class="w-full">
                    <i id="menu-icon" class="justify-center items-center fixed top-3 left-3 z-20 p-2 rounded-lg border flex bg-gray-800">
                        <svg id="menu-icon-show" class="fill-white w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                        <svg id="menu-icon-close" class="hidden fill-white w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        </i>
                    
                    <div id="mobile-drop-right" class="hidden flex flex-col justify-start py-24 gap-6 bg-gray-800 bg-opacity-95 h-full w-72 min-w-60 max-w-60% p-3 animate-slideInRight origin-left">
                        <a class="mobile-menu-a" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg><p>Strona Główna</p>
                        </a>
                        <a class="mobile-menu-a" href="/galeria/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-400h400L622-580l-92 120-62-80-108 140Zm-40 160q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>
                            <p>Galeria Zdjęć</p>
                        </a>
                        <div class="flex flex-col gap-4">
                            <a id="apartamenty-drop-btn" class="mobile-menu-a" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>
                                <p>Nasza Oferta</p><i id="apartamenty-drop" class="material-symbols-outlined">keyboard_arrow_down</i>
                            </a>
                            <div id="apartamenty-drop-div" class="hidden flex-col gap-3 ml-2">
                                <a href="/apartament-dwupoziomowy-nr1/">Apartament Dwupoziomowy Nr. 1</a>
                                <a href="/apartament-dwupoziomowy-nr2/">Apartament Dwupoziomowy Nr. 2</a>
                                <a href="/apartament-dwupoziomowy-nr3/">Apartament Dwupoziomowy Nr. 3</a>
                                <a href="/apartament-dwupoziomowy-nr4/">Apartament Dwupoziomowy Nr. 4</a>
                                <a href="/apartament-z-2-sypialniami/">Apartament z 2 Sypialniami</a>
                                <a href="/domek-z-2-sypialniami/">Domek z 2 Sypialniami</a>
                    
                            </div>
                        </div>
                        
                        <div class="flex flex-col gap-4">
                            <a id="atrakcje-btn" class="mobile-menu-a" >
                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m280-40 123-622q6-29 27-43.5t44-14.5q23 0 42.5 10t31.5 30l40 64q18 29 46.5 52.5T700-529v-71h60v560h-60v-406q-48-11-89-35t-71-59l-24 120 84 80v300h-80v-240l-84-80-72 320h-84Zm17-395-85-16q-16-3-25-16.5t-6-30.5l30-157q6-32 34-50.5t60-12.5l46 9-54 274Zm243-305q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z"/></svg>
                                <p>Atrakcje w Okolicy</p><i id="atrakcje-drop" class="material-symbols-outlined">keyboard_arrow_down</i>
                            </a>
                            <div id="atrakcje-div" class="hidden flex-col gap-3 ml-2">
                                <a href="/atrakcje/">Atrakcje Turystyczne</a>
                                <a href="/szlaki/">Szlaki Piesze</a>
                                <a href="/trasy-rowerowe/">Trasy Rowerowe</a>
                            </div>
                        </div>
                        <a class="mobile-menu-a" href="/cennik/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg>
                            <p>Cennik</p>
                        </a>
                        <a class="mobile-menu-a" href="/rezerwacja/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
                            <p>Rezerwacja</p>
                        </a>
                    </div>
                </div>
            </header>
        `

        const menuIcon = this.querySelector("#menu-icon");
        const mobileRight = this.querySelector("#mobile-drop-right");

        const menuIconShow = this.querySelector("#menu-icon-show");
        const menuIconClose = this.querySelector("#menu-icon-close");

        menuIcon.addEventListener("click", () => {
            mobileRight.classList.toggle("hidden");
            menuIconClose.classList.toggle("hidden")
            menuIconShow.classList.toggle("hidden")
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
                    <footer class="bg-[#0c245c] text-white gap-5 flex flex-col">
                        <div class="p-10 max-sm:p-6 flex flex-col justify-start w-11/12 max-xl:w-full">
                            <h2 class="text-4xl max-sm:text-3xl font-glowna">Apartamenty "Cichy Zakątek"</h2>
                            <hr class="border-2 h-0.5 w-4/12 my-4 border-white">
                            <div class="flex flex-row justify-between flex-wrap gap-8">
                                <div class="flex flex-col justify-start w-96">
                                    <h3 class="text-2xl my-2">Kontakt:</h3>
                                    <div class="flex flex-col gap-2">
                                        <p><strong>Telefon:</strong> <a href="tel:+48505720041">505 720 041</a></p>
                                        <p><strong>Email:</strong> <a href="mailto:info@cichyzakatek.com.pl">info@cichyzakatek.com.pl</a></p>
                                        
                                        <p><strong>Adres:</strong> <a target="_blank" href="https://www.google.com/maps/place/Apartamenty+Cichy+Zakątek/@50.4514114,16.2529824,17z/data=!3m1!4b1!4m6!3m5!1s0x470e6f3db0cec145:0x24eb0e0ed1c3b027!8m2!3d50.4514114!4d16.2529824!16s%2Fg%2F11j0p_mlyv?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">
                                        ul. Tadeusza Kościuszki 112C <br>57-350 Kudowa-Zdrój
                                        </a></p>
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
                                        <li><a href="/domek-z-2-sypialniami/">Domek z 2 sypialniami</a></li>
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
                        <div class="flex gap-4 w-full justify-center items-center">
                                <a class="bg-black bg-opacity-40 rounded-full p-5 w-16 h-16 flex justify-center items-center hover:opacity-65 duration-200 hover:bg-black" target="_blank" href="https://www.facebook.com/cichyzakatek.kudowa/"><svg class="w-[20px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path></svg></a>
                                <a class="bg-black bg-opacity-40 rounded-full p-4 w-16 h-16 flex justify-center items-center hover:opacity-65 duration-200 hover:bg-black" target="_blank" href="https://www.instagram.com/cichyzakatek_/"><svg class="w-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a>
                          
                        </div>
                   
                        
                        <div class="p-3">
                            <p>&copy; 2024 Apartamenty Cichy Zakątek. Wszelkie prawa zastrzeżone.</p>
                        </div>
                    </footer>
                    <div id="cookies-div" class="hidden fixed bottom-5 left-24 max-lg:left-5 flex-col gap-2 bg-white rounded-xl shadow-2xl p-4 w-96 max-w-[calc(100%-36px)]">
                        <h3 class="text-2xl font-semibold">Cookies</h3>
                        <p class="text-sm">Ta strona używa plików cookies, w celu obserwowania ruchu na naszej stronie stronie. Aby zarządać swoimi ciasteczkami <a class="underline text-blue-700" href="/polityka-prywatnosci/#cookies">Kliknij Tutaj</a>.</p>
                        <form onsubmit="acceptCookies(event)" class="flex flex-col gap-4 mt-2">
                            <div class="flex gap-4 items-center max-sm:flex-col-reverse">
                                <button data-agreed="1" type="submit" class="w-full rounded-full py-1.5 bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800 duration-200">Zgadzam się</button>
                                <button data-agreed="0" type="submit" class="w-full rounded-full py-1.5 bg-white text-gray-800 border-2 border-gray-800 hover:bg-gray-800 hover:text-white duration-200">Nie zgadzam się</button>
                           
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
            <div id="popup-aparts" class="hidden z-30 fixed bottom-0 top-0 left-0 right-0 w-full flex items-center justify-center h-screen bg-black bg-opacity-50">
                <div class="z-30 flex flex-row justify-center items-center gap-5 w-full pl-5">
                    <i id="p-close" class="fixed top-5 right-5 cursor-pointer text-white material-symbols-outlined p-2 rounded-lg border bg-gray-800">close</i>
                    
                    <div id="changing-div" class="popup-link popup-link-aparts cursor-pointer">
                        <div class="justify-start">
                            <img id="lista-hide" loading="lazy" src="/img/a1/1B0A3938.jpg" alt="Zdjęcie Apartamentu">
                            <h3 class="text-xl font-medium p-4">Apartamenty Dwupoziomowe</h3>
                        
                        </div>
                    </div>
                    <a  href="/apartament-z-2-sypialniami/" class="popup-link popup-link-aparts">
                        <div>
                            <img loading="lazy" src="/img/a5/1.jpg" alt="Zdjęcie Apartamentu">
                            <h3 class="text-xl font-medium p-4">Apartament z 2 sypialniami</h3>
                        </div>
                    </a>
        
                    <a  href="/domek-z-2-sypialniami/" class="popup-link popup-link-aparts">
                        <div>
                            <img loading="lazy" src="/img/domek/163-kudowa-zdroj-cichy-zakatek.jpg" alt="Zdjęcie Domku">
                            <h3 class="text-xl font-medium p-4">Domek z 2 Sypialniami</h3>
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
            </div>
            <div id="popup-atrakcje" class="hidden z-30 fixed top-0 left-0 w-full pr-5 h-full bg-black bg-opacity-50 flex flex-row justify-center items-center gap-5 max-xl:gap-3">
                <i id="p-close-2" class="fixed top-5 right-5 cursor-pointer text-white material-symbols-outlined p-2 rounded-lg border bg-gray-800">close</i>
                
               
                <a  href="/atrakcje/" class="popup-link">
                    <div>
                        <img loading="lazy" src="/gallery/25d9b0c52278471f8fd8ca2861b208d6.jpg" alt="Atrakcje Turystyczne zdjęcie">
                        <h3 class="text-xl font-medium p-4">Atrakcje Turystyczne</h3>
                    </div>
                </a>
                <a  href="/szlaki/" class="popup-link">
                    <div>
                        <img loading="lazy" src="/gallery2/B--dne-Ska-y-15.jpg" alt="Atrakcje Turystyczne zdjęcie">
                        <h3 class="text-xl font-medium p-4">Szlaki Piesze</h3>
                    </div>
                </a>
    
                <a  href="/trasy-rowerowe/" class="popup-link">
                    <div>
                        <img loading="lazy" src="/gallery/BABICCINO-UDOLI-RATIBORICE-z-paluby-vrtulniku-5ffbf53b01523.jpg" alt="Atrakcje Turystyczne zdjęcie">
                        <h3 class="text-xl font-medium p-4">Trasy Rowerowe</h3>
                    </div>
                </a>
               
            </div>
        `;
       
        const close = this.querySelector("#p-close"),
        popupDiv = this.querySelector("#popup-aparts"),
        popupBtn1 = document.querySelectorAll(".popup-activate"),
        changingDiv = this.querySelector("#changing-div"),
        hideOther = this.querySelectorAll(".popup-link-aparts"),
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





        const close2 = this.querySelector("#p-close-2"),
        popupDiv2 = this.querySelector("#popup-atrakcje"),
        popupBtn2 =  document.querySelector(".popup-activate-2")
       
    

        close2.addEventListener("click", () => {
            popupDiv2.classList.add("hidden");
        })
        popupBtn2.addEventListener("click", () => {
            popupDiv2.classList.remove("hidden")
        });
        
        
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