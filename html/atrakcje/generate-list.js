const fs = require('fs');

const handleData = ({ h1, img, urls, pageUrl }) => {
    const zdjecia = img.map(el => {
        return `<img class="img-atrakcje" onclick="zoomIn('/img/pomniejszone_KADR4492.jpg')" loading="lazy" alt="Zdjęcie atrakcji" src="/img/pomniejszone_KADR4492.jpg">`;
    }).join("")
    const linki = urls.map(url => {
        return `<a class="url-atrakcje" rel="nofollow" target="_blank" href="${url}">${url}</a>`;
    }).join("")

    const content = ``;

}







const handleArray = (dataArr) => {
  const urlArr = JSON.parse(dataArr);
  urlArr.slice(0, 2).forEach(element => {
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
