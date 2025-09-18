class Atrakcje extends HTMLElement {

    connectedCallback() {
    
        this.innerHTML = `
                    <section class="my-6">
            <div class="my-div">
                <h2 class="text-center font-medium text-4xl">Atrakcje w okolicy</h2>
                <div class="flex flex-row max-lg:flex-col max-lg:items-center justify-center gap-12 items-start max-lg:max-w-500 max-w-800 w-full mx-auto">

                    <div class="atrakcje-div">
                        <div class="flex flex-col">
                            <a id="atrakcje-img" class="" href="/atrakcje/">
                                <img class="atrakcje-zdjecie" loading="lazy" src="/gallery/full/bledne-skaly/IMG20231003175741~2.webp" alt="Atrakcje Turystyczne w Kudowie">
                            </a>
                            <div class="flex flex-col gap-4 p-4">

                                <div class="flex justify-between items-center gap-2">
                                    <a class="text-xl font-medium" href="/atrakcje/">Atrakcje Turystyczne</a>
                                    <svg class="w-5 h-5 fill-black cursor-pointer rotate-180" onclick="toggleAtrakcje(0)" id="atrakcje-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                        
                                </div>
                                <div id="atrakcje-list" class="hidden atrakcje-list-div">
                                    <a href='/atrakcje/id/kaplica-czaszek.html'>Kaplica Czaszek</a>
                                    <a href='/atrakcje/id/ruchoma-szopka.html'>Ruchoma Szopka</a>
                                    <a href='/atrakcje/id/zamek-w-nachodzie.html'>Zamek w Nachodzie</a>
                                    <a href='/atrakcje/id/szczeliniec-wielki-park-dinozaurow.html'>Szczeliniec Wielki</a>
                                    <a href='/atrakcje/id/skansen-w-pstraznej.html'>Skansen w Pstrążnej</a>
                                    <a href='/atrakcje/id/park-zdrojowy-muzeum-zabawek.html'>Park Zdrojowy / Muzeum Zabawek</a>
                                    <a href='/atrakcje/id/bledne-skaly.html'>Błędne Skały</a>
                                    <a href='/atrakcje/id/zieleniec-ski-arena.html'>Zieleniec Ski Arena</a>
                                    <a href='/atrakcje/id/skalne-miasto-adrspach.html'>Skalne Miasto Adrspach</a>
                                    <a href='/atrakcje/id/aquapark-wodny-swiat.html'>Aquapark Wodny Świat</a>
                                    <a href='/atrakcje/id/sniezka.html'>Snieżka z Pec pod Sněžkou</a>
                                    <a href='/atrakcje/id/broumovske-steny.html'>Broumovske Steny (CZ)</a>
                                    <a href='/atrakcje/id/jaskinia-macochy.html'>Jaskinia Macochy (CZ)</a>
                                    <a href='/atrakcje/id/sky-bridge-721.html'>Sky Bridge 721 (CZ)</a>
                                    <a href='/atrakcje/id/jaskinia-niedzwiedzia.html'>Jaskinia Niedźwiedzia</a>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div class="atrakcje-div">
                        <div class="flex flex-col">
                            <a id="trasy-img" class="" href="/trasy-rowerowe/">
                                <img class="atrakcje-zdjecie" loading="lazy" src="/gallery3/main-tel.webp" alt="Trasy rowerowe w Kudowie">
                            </a>
                            <div class="flex flex-col gap-4 p-4">

                                <div class="flex justify-between items-center gap-2">
                                    <a class="text-xl font-medium" href="/trasy-rowerowe/">Trasy Rowerowe</a>
                                    <svg class="w-5 h-5 fill-black cursor-pointer rotate-180" onclick="toggleAtrakcje(1)" id="trasy-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                        
                                </div>
                                <div id="trasy-list" class="hidden atrakcje-list-div">
                                    <a href='/trasy-rowerowe/id/peklo.html'>Peklo</a>
                                    <a href='/trasy-rowerowe/id/ostra-gora-karlow.html'>Ostra Góra - Karłów</a>
                                    <a href='/trasy-rowerowe/id/sawanna-lezycka-sawanna-pasterska.html'>Sawanna Łężycka</a>
                                    <a href='/trasy-rowerowe/id/wieza-widokowa-vysoka-srbska.html'>Wieża Vysoká Srbská</a>
                                    <a href='/trasy-rowerowe/id/wieza-widokowa-na-signalu.html'>Wieża widokowa Na Signálu</a>
                                    <a href='/trasy-rowerowe/id/broumovske-steny.html'>Broumovské Stěny</a>
                                    <a href='/trasy-rowerowe/id/wieza-widokowa-sibenik.html'>Wieża widokowa Šibeník</a>
                                    <a href='/trasy-rowerowe/id/radkow-wodospad-posny.html'>Radków - Wodospad Pośny</a>
                                    <a href='/trasy-rowerowe/id/machov-pasterka.html'>Machov - Pasterka</a>
                                    <a href='/trasy-rowerowe/id/kregielny-trakt-szczytna.html'>Kręgielny Trakt - Szczytna</a>
                                    <a href='/trasy-rowerowe/id/pstrazna-zdarky.html'>Pstrążna - Žďárky</a>
                                    <a href='/trasy-rowerowe/id/bukowina-klodzka-darnkow.html'>Bukowina Kłodzka - Darnków</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        `
    }
}
customElements.define("my-atrakcje", Atrakcje)


const toggleAtrakcje = (id) => {
    const divList = [
        [
            document.getElementById("atrakcje-list"),
            document.getElementById("atrakcje-img"),
            document.getElementById("atrakcje-arrow")
        ],
        [
            document.getElementById("trasy-list"),
            document.getElementById("trasy-img"),
            document.getElementById("trasy-arrow")
        ]
    ];
    const currList = divList[id];

    const img = currList[1];
    const list = currList[0];
    const arrow = currList[2]

    if (list.classList.contains("hidden")) {
        
        list.classList.remove("hidden");
        list.classList.add("animation-atrakcje");
        list.classList.add("flex");
        arrow.classList.remove("rotate-180")

        img.classList.add("animation-atrakcje-img");

        setTimeout(() => {
            img.classList.add("hidden");
            img.classList.remove("animation-atrakcje-img");
        }, 200); 
    } else {
       
        list.classList.add("hidden");
        list.classList.remove("animation-atrakcje");
        list.classList.remove("flex");
        arrow.classList.add("rotate-180")

        img.classList.remove("hidden");
        img.classList.add("animation-atrakcje-img-reverse");

        setTimeout(() => {
            img.classList.remove("animation-atrakcje-img-reverse");
        }, 200); 
    }
};