class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="fixed left-0 h-full text-white flex flex-row justify-center">
                <div class="flex flex-col align-middle justify-center gap-5 bg-gray-800 h-full w-16">
                    <div class="nav-bar-icons"><a href=""><i class="material-symbols-outlined">home</i></a></div>
                    <div class="nav-bar-icons"><a href=""><i class="material-symbols-outlined">apartment</i></a></div>
                    <div class="nav-bar-icons"><a href=""><i class="material-symbols-outlined">photo_library</i></a></div>
                    <div class="nav-bar-icons"><a href=""><i class="material-symbols-outlined">payments</i></a></div>
                    <div class="nav-bar-icons"><a href=""><i class="material-symbols-outlined">chat</i></a></div>
                </div>
                
                <div class="w-48 bg-gray-700 bg-opacity-95 flex flex-col justify-center gap-5 h-ful">
                    <div class="nav-bar-items"><a href="">Strona Główna</a></div>
                    <div class="nav-bar-items">Apartamenty <i id="drop-down-icon" class="material-symbols-outlined">keyboard_arrow_down</i></div>
                    <div>
                        <p class="text-xs">Apartamenty dwupoziomowe<i id="drop-down-icon-deep" class="material-symbols-outlined">keyboard_arrow_down</i></p>
                        <a href="a5.html" class="text-xs">Apartament Dwupokojowy</a>
                        <a href="domek.html" class="text-xs">Domek Drewniany</a>
                    </div>
                    <div class="nav-bar-items"><a href="galeria.html">Galeria</a></div>
                    <div class="nav-bar-items"><a href="cennik.html">Cennik</a></div>
                    <div class="nav-bar-items"><a href="">Kontakt</a></div>
                </div>
                
            </header>
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <footer>
                    <div>
                        <p>Adres: Tadeusza Kościuszki | Kudowa-Zdrój</p>
                        <p>Telefon: 123 456 789</p>
                        <p>Email: kontakt@hotel-luksusowy.pl</p>
                    </div>
                    <div class="container">
                        <p>&copy; 2024 Apartamenty CichyZakątek. Wszelkie prawa zastrzeżone.</p>
                    </div>
                </footer>
        `
    }
}
customElements.define("my-header", Header)
customElements.define("my-footer", Footer)
