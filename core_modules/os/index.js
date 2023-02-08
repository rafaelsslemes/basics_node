const os = require('os');

console.log(os.cpus());
console.log(os.freemem());
console.log(os.platform());


// Great to use in Unit Tests
console.log(os.tmpdir());

