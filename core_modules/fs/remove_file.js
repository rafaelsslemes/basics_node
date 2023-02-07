const fs = require('fs');

console.log('File remotion initiated!');

try{

    fs.unlinkSync('file.txt', function(err){
        if(err){
            console.log('File cannot be removed');
            return;
        }
        
    });
    
    console.log('File removed!');

}catch(err){

    console.log('File not found');
    console.log(err.message);

}