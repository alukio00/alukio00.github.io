const fs = require('fs');
const files = fs.readdirSync('./img/domek');
console.log(files.map(el => "/img/domek/" + el))