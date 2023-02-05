
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

var name;

readline.question("Please insert your name...", (typed)=> {
    name = typed;
    console.log(`Thanks ${name}`);
    readline.close();
})
