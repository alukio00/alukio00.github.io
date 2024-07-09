class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header id="header" class="z-10 fixed left-0 h-full text-white flex flex-row justify-center">
            <div class="flex flex-col align-middle justify-center gap-5 bg-gray-800 h-full w-16">
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


const menuIcon = document.getElementById("menu-icon");
const mobileRight = document.getElementById("mobile-drop-right")

const mobileMenu = () => {
    mobileRight.classList.toggle("hidden")
    if (menuIcon.textContent == "close") {
        menuIcon.textContent = "menu"
    } else {
        menuIcon.textContent = "close"
    }
}


menuIcon.addEventListener("click", mobileMenu)