const http = require('http');

const port = 8080

const server = http.createServer((request, response)=>{
    
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('<H1> Hello HTML Return! ˜!@#$</H1>`');
});

server.listen(port, ()=>{
    console.log(`Server running, listen to port: ${port}`);
})