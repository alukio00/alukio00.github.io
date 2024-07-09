class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="z-10 fixed left-0 h-full w-full text-white flex flex-row justify-start">
                <div class="max-md:hidden flex flex-col align-middle justify-center gap-5 bg-gray-800 h-full w-16">
                    <div class="nav-bar-icons"><a href="index.html"><i class="material-symbols-outlined">home</i></a><div class="sidebar-child">
                        <p>Strona Główna</p>
                    </div></div>
                    <div class="nav-bar-icons"><a href=""><i class="material-symbols-outlined">apartment</i></a><div class="sidebar-child">
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

                <div class="max-md:flex hidden w-full">
                    <i id="menu-icon" class="material-symbols-outlined fixed top-3 left-3 z-20 p-1.5 rounded-lg border flex bg-gray-800">menu</i>
                    <div id="mobile-drop-right" class="hidden flex flex-col justify-start py-24 gap-6 bg-gray-800 bg-opacity-95 h-full w-8/12 max-w-80 p-3 animate-slideInRight origin-left">
                        <a class="mobile-menu-a" href="index.html">
                            <i class="material-symbols-outlined">home</i><p>Strona Główna</p>
                        </a>
                        <a class="mobile-menu-a" href="index.html">
                            <i class="material-symbols-outlined">apartment</i><p>Apartamenty</p>
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
customElements.define("my-header", Header);
customElements.define("my-footer", Footer);


const menuIcon = document.getElementById("menu-icon");
const mobileRight = document.getElementById("mobile-drop-right");

const mobileMenu = () => {
    mobileRight.classList.toggle("hidden")
    if (menuIcon.textContent == "close") {
        menuIcon.textContent = "menu";
    } else {
        menuIcon.textContent = "close";
    }
};


menuIcon.addEventListener("click", mobileMenu);