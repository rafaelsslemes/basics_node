const fs = require('fs');

fs.stat('home.html', (err, stats)=>{

    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.ctime);
    console.log(stats.size);

});