const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 8080

const server = http.createServer((request, response)=>{

    const urlInfo = url.parse(request.url, true);
    const filename = urlInfo.pathname.substring(1);
    
    if(filename.includes('html')){
        fs.readFile(filename,function (err, fileData){

            if(err){
                notFoundPage(response);
            }

            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(fileData);
            return response.end();
        });
    }else{
        notFoundPage(response);
    }

});

server.listen(port, ()=>{
    console.log(`Server running, listen to port: ${port}`);
})

function notFoundPage(response){
    response.writeHead(404, {'Content-Type':'text/html'});
    return response.end('<H1>Page not Found</H1>');  
}