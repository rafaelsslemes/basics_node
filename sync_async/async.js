const fs = require('fs');

console.log('Begin');

// Async functions receive a function to execute on complete
fs.writeFile('file.txt', 'Hello!', ()=>{
    
    // Simulate a delay
    setTimeout(function(){
        console.log('file created')}, 1000);
    });

console.log('End');