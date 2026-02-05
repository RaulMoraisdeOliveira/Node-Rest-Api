const http = require('node:http');

http.createServer(function (request, response) {
  response.write(
    200, 
    {'content-type': 'text/html; charset=utf-8'});
  response.end('<h1>Olá Cliente!</h1>');
}).listen(3000);