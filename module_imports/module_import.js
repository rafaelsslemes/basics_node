const fs = require('fs'); // FileSystem Utils

fs.readFile('tex_sample.txt', 'utf8', (err, data) => {
    
    if(err){
        console.log(err);
    }

    console.log(data);
});