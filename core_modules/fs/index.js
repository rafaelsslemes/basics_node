const http = require('http');
const fs =  require('fs');

const port = 8080

const server = http.createServer((request, response)=>{
    console.log('Request received...');

    fs.readFile('home.html', function(err, fileData){

        
        if(err){
            response.writeHead(404, {'Content-Type':'text/html'});
            return response.end('<H1>Page not Found</H1>');  
        }

        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(fileData);
        return response.end();
    });

});

server.listen(port, ()=>{
    console.log(`Server running, listen to port: ${port}`);
})