const path = require('path');

const filepath = '/files/photos/2023/john.png';

console.log(path.dirname(filepath));
console.log(path.basename(filepath));
console.log(path.extname(filepath));

console.log(path.resolve('file.txt'));

const username = 'Peter';
const rootDir = 'Users';
const filename = 'Profile.pdf';

const formatedPath = path.join('/', rootDir, username,filename);
console.log(formatedPath);
