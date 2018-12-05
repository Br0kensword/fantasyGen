const fs = require('fs');


let content = fs.readFileSync('./magics.js', 'utf8')
content = content.split(/\n/)

content = content.filter(x => x !== '  ')
content = content.map(x => "'" + x + "'")

fs.writeFileSync('./titles.js', content);
console.log("All Done");
