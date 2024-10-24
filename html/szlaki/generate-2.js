const fs = require('fs');


const handleData = ({ h1, img, urls, pageUrl }) => {
    const zdjecia = img.map(el => {
        const regex = /images/;
        const regex3 = /gallery/;
        const regex2 = /_thumb.png/;
        const zmienna = el.replace(regex3, "gallery2").replace(regex, "gallery2").replace(regex2, ".jpg")
        

        
        return `<img class="img-atrakcje" onclick="zoomIn('/apartamenty/${zmienna}')" loading="lazy" alt="Zdjęcie atrakcji" src="/apartamenty/${zmienna}">`;
    }).join("")
    const linki = urls.map(url => {
        return `<a class="url-atrakcje" rel="nofollow" target="_blank" href="${url}">${url}</a>`;
    }).join("")

    const content = `
<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="${h1}">
        <title>${h1}</title>
        <script src="/apartamenty/js/headerfooter.js"></script>
        <link href="/apartamenty/css/global.css" rel="stylesheet">
        <link href="/apartamenty/src/output.css" rel="stylesheet">
        <link href="/apartamenty/css/atrakcje.css" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <script src="/apartamenty/js/zoom-atrakcje.js" defer></script>
        <script src="/apartamenty/js/img-zoom-popup.js"></script>

    </head>

    <body>
        <popup-image-zoom></popup-image-zoom>
        <my-header></my-header>
        <main>
            <section class="flex flex-col gap-14">
                <div class="flex flex-col gap-8">
                    <h1 class="text-4xl">${h1}</h1>
                    <hr class="h-0.5 bg-gray-800 w-2/5 border border-gray-800">
                </div>
                <div class="flex flex-col gap-4">
                    <h2 class="text-3xl">Więcej Informacji:</h2>
                    <div class="flex flex-col gap-3" id="links">
                        ${linki}
                    </div>
                 </div>
                 <div class="flex flex-col gap-4">
                    <h2 class="text-3xl">Zdjęcia:</h2>
                    <div class="grid-img" id="galeria-1">
                        ${zdjecia}
                    </div>
                 </div>
            </section>
        </main>
        <my-popup-ap></my-popup-ap>
        <my-footer></my-footer>
    </body>
</html>
    `;
    
    fs.writeFile("./id/" + pageUrl, content, function (err) {
        if (err) throw err;
    });
}

const makeList = (array) => {
    const list = array.map(el => {

        const rawPhoto =  el.img[0]
        const regex = /images/;
        const regex3 = /gallery/;
        const regex2 = /_thumb.png/;
        const photo = rawPhoto.replace(regex3, "gallery2").replace(regex, "gallery2").replace(regex2, ".jpg")
     

        const h1 = el.h1.replace(" - Cichy Zakątek", "")
        return `<a href="./id/${el.pageUrl}" class="text-xl flex flex-col gap-2 rounded-xl max-w-full shadow-lg bg-white hover:scale-105 duration-200">
            <img class="object-cover rounded-tl-xl rounded-tr-xl h-40" loading="lazy" src="/apartamenty/${photo}" alt="Atrakcje Turystyczne zdjęcie">
            <div class="rounded-b-xl p-4">
                <h3 class="text-xl font-medium">${h1.length > 45 ? h1.slice(0, 45) + "..." : h1}</h4>
            </div>
        </a>`;
    }).join("")
 
    const content = `
<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Szlaki Turysteczne</title>
        <script src="/apartamenty/js/headerfooter.js"></script>
        <link href="/apartamenty/css/global.css" rel="stylesheet">
        <link href="/apartamenty/src/output.css" rel="stylesheet">
        <link href="/apartamenty/css/atrakcje-lista.css" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </head>
    <body>
        <my-header></my-header>
        <main>
            <section class="flex flex-col gap-14">
                <div class="flex flex-col gap-8">
                    <h1 class="text-5xl">Szlaki Turystyczne</h1>
                    <hr class="h-0.5 bg-gray-800 w-2/5 border border-gray-800">
                </div>
                <div id="div-list" class="grid-list">
                    ${list}
                </div>
            </section>
        </main>
        <my-popup-ap></my-popup-ap>
        <my-footer></my-footer>
    </body>
</html>
`;
    fs.writeFile("./index.html", content, function (err) {
        if (err) throw err;
    });
}


const handleArray = (dataArr) => {
  const urlArr = JSON.parse(dataArr);
  makeList(urlArr)

  urlArr.forEach(element => {
    handleData(element)
  });
  
}

fs.readFile('./szlaki.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  handleArray(data);
});
