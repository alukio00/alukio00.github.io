class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <header>
                    <div>
                        <nav>
                            <ul>
                                <li><a href="#home">Strona Główna</a></li>
                                <li><a href="#about">O nas</a></li>
                                <li><a href="#rooms">Pokoje</a></li>
                                <li><a href="#facilities">Udogodnienia</a></li>
                                <li><a href="#gallery">Galeria</a></li>
                                <li><a href="#contact">Kontakt</a></li>
                            </ul>
                        </nav>
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
