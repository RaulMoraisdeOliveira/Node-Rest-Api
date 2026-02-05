const http = require('node:http');
const users = require('./mocks/users');

http.createServer(function (request, response) {
  if (request.url === '/users') {
    response.writeHead(
      200, 
      {'content-type': 'application/json'}
    );
    response.end(JSON.stringify(users));
    return;
  }

  response.writeHead(
    200, 
    {'content-type': 'text/html; charset=utf-8'}
  );
  response.end('<h1>Olá, Cliente!</h1>');
}).listen(3000);