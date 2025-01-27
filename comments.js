// Create web server
// Create a web server that listens on port 3000 and serves the following responses:
// 1. If the route is /, the server should respond with "Hello, World!".
// 2. If the route is /compliment, the server should respond with "You look nice today".
// 3. If the route is /complaint, the server should respond with "You look terrible".

const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello, World!');
    res.end();
  } else if (req.url === '/compliment') {
    res.write('You look nice today');
    res.end();
  } else if (req.url === '/complaint') {
    res.write('You look terrible');
    res.end();
  } else {
    res.write('Not Found');
    res.end();
  }
});

server.listen(3000);
console.log('Listening on port 3000...');