const http = require('http');

const port = 8080

const server = http.createServer((request, response)=>{
    console.log('Request received...');

    response.write('Hello HTTP');
    response.end();
});

server.listen(port, ()=>{
    console.log(`Server running, listen to port: ${port}`);
})