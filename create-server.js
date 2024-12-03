const http = require('http');
// http.createServer((request,response) => {
//     response.writeHead(200,{'Content-Type':'text/html'})
//     response.write("<h2>Hello World</h2>")
//     response.end();
// }).listen(1000)

const abc = (request,response) => {
    
    response.writeHead(200,{'Content-Type':'text/html'})
    response.write("<h2>Hello World</h2>")
    response.end();
}

http.createServer( abc(var a = 10) ).listen(1000)