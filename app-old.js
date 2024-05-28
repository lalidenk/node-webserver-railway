const http = require('http');

const server= http.createServer((req, res)=>{
    //res.writeHead(200,{'content-type':'text/plain'})
    res.write('Hola mundo')
    res.end();
})
.listen(8080);

console.log('escuchando el puerto',8080)