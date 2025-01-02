const placeId = "ChIJRcHOsD1vDkcRJ7DD0Q4O6yQ"

const getReviews = async () => {
    return new Promise((resolve, reject) => {
      const service = new google.maps.places.PlacesService(document.createElement('div'));
  
      const request = {
        placeId,
        fields: ["reviews"],
      };
  
      service.getDetails(request, (place, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          reject(`Błąd: ${status}`);
          return;
        }
  
   
        const reviews = (place.reviews || []).filter(el => el.rating === 5).slice(0, 4);
        resolve(reviews);
      });
    });
  };
class ReviewsWidget extends HTMLElement {
    
    reviews = []

    async connectedCallback() {
        try {
            this.reviews = await getReviews()
        } catch (error) {
            console.error(error)
            this.reviews = []
        }

        this.render()
        
    }

    render() {
    

        const gwiazdki = Array.from({length: 5}, (v, k) => `
            <svg class="w-7 h-7 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`)

        const htmlReviews = this.reviews.map(({ author_name, profile_photo_url, text, time }) => {
            return `
                <div class="bg-white rounded-xl shadow-div w-full max-w-500 p-5 gap-4 flex flex-col">
                    <div class="flex gap-2">
                        <img class="w-20 h-20 object-cover" src="${profile_photo_url}" alt="Zdjęcie Profilowe">
                        <div class="flex flex-col gap-2">
                            <h3 class="text-2xl">${author_name}</h3>
                            <div class="flex gap-1">${gwiazdki.join("")}</div>
                        </div>
                    </div>
                    <p class="text-lg">${text}</p>
                </div>
            `
        })

        this.innerHTML = `
            <section class="flex flex-col gap-14 justify-center">
                <h2 class="text-center font-medium text-4xl">Opinie</h2>
                <div class="w-full max-w-10xl mx-auto justify-center flex-col items-center flex gap-8">
                    <div class="flex gap-8 justify-center max-lg:flex-col">
                        ${htmlReviews.slice(0, 2).join("")}
                    </div>
                    <div class="flex gap-8 justify-center max-lg:flex-col">
                        ${htmlReviews.slice(2, 4).join("")}
                    </div>
                    
                </div>
                <a class="mx-auto button-1" href="https://www.google.com/travel/search?gsas=1&ts=EggKAggDCgIIAxocEhoSFAoHCOkPEAMYARIHCOkPEAMYBBgDMgIQAA&qs=MhNDZ29JcC1DT2p1M0J3X1VrRUFFOAI&ap=ugEHcmV2aWV3cw&client=opera-gx&hs=q0F&biw=1557&bih=778&hl=pl-PL&ved=0CAAQ5JsGahcKEwjgzpP45aeKAxUAAAAAHQAAAAAQBQ" target="_blank">Wszystkie Opinie</a>
            </section>
        `
    }
}
customElements.define("reviews-wigdet", ReviewsWidget)
