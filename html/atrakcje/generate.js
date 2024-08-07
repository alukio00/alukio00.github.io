const fs = require('fs');


const handleData = ({ h1, img, urls, pageUrl }) => {
    const zdjecia = img.map(el => {
        const regex = /images/;
        const zmienna = el.replace(regex, "gallery");
        console.log(zmienna)
        
        return `<img class="img-atrakcje" onclick="zoomIn('/${zmienna}')" loading="lazy" alt="Zdjęcie atrakcji" src="/${zmienna}">`;
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
        <title>${h1}</title>
        <script src="/html/headerfooter.js"></script>
        <link href="/css/global.css" rel="stylesheet">
        <link href="/src/output.css" rel="stylesheet">
        <link href="/css/atrakcje.css" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <script src="/html/atrakcje/atrakcje.js" defer></script>

    </head>

    <body>
        <div id="popup-div" class="hidden fixed left-0 w-full h-full flex justify-between items-center flex-row z-30 bg-black bg-opacity-50">
            <div>
                <button onclick="zoomLeft()" type="button" class="border-2 hover:bg-gray-900 mx-4 flex cursor-pointer bg-gray-800 rounded-md text-white justify-center align-middle"><i class="material-symbols-outlined">chevron_left</i></button>
            </div>
            <div id="zoom-div" class="flex items-center justify-center mx-0"></div>
            <div>
                <button onclick="zoomRight()" type="button" class="border-2 hover:bg-gray-900 mx-4 cursor-pointer flex bg-gray-800 rounded-md text-white justify-center align-middle"><i class="material-symbols-outlined">chevron_right</i></button>
            </div>
          
            <div id="popup-btn" class="flex z-40 fixed top-14 right-14">
                <button class="text-white material-symbols-outlined rounded-lg border-2 bg-gray-800" type="button" onclick="closeZoom()">close</button>
            </div>
        </div>
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
        const h1 = el.h1.replace(" - Cichy Zakątek", "")
        return `<a href="./id/${el.pageUrl}" class="text-xl p-4 rounded-xl max-w-full shadow-lg border-2 border-gray-800 hover:scale-105 duration-200">${h1.length > 45 ? h1.slice(0, 45) + "..." : h1}</a>`;
    }).join("")
 
    const content = `
<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Atrakcje Turystyczne</title>
        <script src="/html/headerfooter.js"></script>
        <link href="/css/global.css" rel="stylesheet">
        <link href="/src/output.css" rel="stylesheet">
        <link href="/css/atrakcje-lista.css" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />


    </head>

    <body>
        <my-header></my-header>
        <main>
            <section class="flex flex-col gap-14">
                <div class="flex flex-col gap-8">
                    <h1 class="text-5xl">Atrakcje Turystyczne</h1>
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
    fs.writeFile("./atrakcje.html", content, function (err) {
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

fs.readFile('./obiekty.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  handleArray(data);
});
