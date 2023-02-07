const http = require('http');
const url = require('url');

const port = 8080

const server = http.createServer((request, response)=>{

    const urlInfo = url.parse(request.url, true);
    const name = urlInfo.query.name;
    
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    if(!name){
        response.end(
            '<H1> Please insert your name:</H1>\
             <form method="GET">\
             <input type="text" name="name"/>\
             <input type="submit" value="Send"/>\
             </form>'
            )
    }else{
        response.end(`Welcome ${name}`);
    }

});

server.listen(port, ()=>{
    console.log(`Server running, listen to port: ${port}`);
})