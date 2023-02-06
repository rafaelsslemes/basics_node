const fs = require('fs');

console.log('Begin');

fs.writeFileSync('file.txt', 'Hello!');

console.log('End');