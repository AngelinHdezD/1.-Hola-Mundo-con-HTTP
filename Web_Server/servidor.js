var http = require('http');
var fs = require ('fs');
var path = require('path');

http.createServer(function(request, response) {
console.log('request ', request.url);

var filePath = '.' + request.url;
if(filePath == './'){
    filePath = './index.html';
}
var extname = String(path.extname(filePath)).toLocaleLowerCase();
var contentType = 'text/html';
var mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/jpg',
    '.gif': 'image/gif',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.svg': 'application/image/svg+xml'
}
contentType = mimeTypes[extname] || 'application/octet-stream';

fs.readFile(filePath, function(error, content) {
if (error){
    if(error.code == 'ENOENT'){
        fs.readFile('./404.html', function(error, content){
            response.writeHead(200, {'Content-Type': contentType});
            response.end(content, 'utf-8');
        });
    }
    else{
        responde.writeHead(500);
        responde.end('Sorry, check with the site admin for error: '+ error.code+' ..\n');
        response.end();
    }
    }
    else{
        response.writeHead(200,{ 'Content-Type': contentType });
        response.end(content, 'utf-8');
    }
});
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');