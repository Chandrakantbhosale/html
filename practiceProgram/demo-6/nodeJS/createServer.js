const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello World\n');
})
.listen(5500);