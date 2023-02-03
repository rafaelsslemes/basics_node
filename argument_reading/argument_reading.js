
console.log(process.argv);

// Dismiss two itens from begin
console.log(process.argv.slice(2))

// Get parameter
var param = process.argv[2];

console.log('Received parameter: ${param}');