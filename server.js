const http = require('http');
const greeting = require('./greeting');

const hi = greeting.greet();
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(hi);
  res.end();
}).listen('8080');