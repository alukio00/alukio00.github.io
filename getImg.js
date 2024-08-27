const fs = require('fs');
const files = fs.readdirSync('./img/wspólne');
console.log(files.map(el => "/img/wspólne/" + el))