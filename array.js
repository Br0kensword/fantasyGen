const fs = require('fs');


let content = fs.readFileSync('./gods.js', 'utf8')
content = content.split(/\n/)

content = content.filter(x => x !== '  ')
content = content.map(x => "'" + x + "'")

fs.writeFileSync('./names.js', content);
console.log("All Done");
