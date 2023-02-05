const minimist = require('minimist');

// using external module
const args = minimist(process.argv.slice(2));

// using internal module
const sum = require('./sum').sum;

var a = parseInt(args['a']);
var b = parseInt(args['b']);

console.log(sum(a, b));