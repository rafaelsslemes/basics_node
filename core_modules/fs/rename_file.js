const fs = require('fs');

console.log('File rename initiated!');

try{

    fs.renameSync('file.txt', 'new_file.txt', function(err){
        if(err){
            console.log('File cannot be renamed');
            return;
        }
        
    });
    
    console.log('File renamed!');

}catch(err){

    console.log('File not found');
    console.log(err.message);

}