const http = require('http');
const fs =  require('fs');
const url = require('url');

const port = 8080

const server = http.createServer((request, response)=>{
    console.log('Request received...');

    const urlInfo = url.parse(request.url, true);
    const name = urlInfo.query.name;

    if(!name){
        fs.readFile('write_file.html', function(err, fileData){
            if(err){
                response.writeHead(404, {'Content-Type':'text/html'});
                return response.end('<H1>Page not Found</H1>');  
            }
    
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(fileData);
            return response.end();
        });
    }else{
        const value = name + '\r\n';

        fs.appendFile('file.txt', value, function (err, data){
            response.writeHead(302, {
                Location:'/',
            })
            return response.end();
        });
    }

});

server.listen(port, ()=>{
    console.log(`Server running, listen to port: ${port}`);
})