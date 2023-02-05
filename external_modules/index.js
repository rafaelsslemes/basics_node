const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);
var name = args['name'];

console.log(`Welcome ${name}`);