const http = require('http');
const hostname = '192.168.1.140';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statsCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('<h1>Hola Mundo, Angel Hernandez Diaz<h1>');
});

server.listen(port,hostname, ()=>{
    console.log('El servidor se esta ejecutando en http://${hostname}:${port}/');
})
