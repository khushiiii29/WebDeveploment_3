const http = require('http');

const port = 3000;

console.log('Server Started');
console.log('Server starting...');

const server = http.createServer((request, response) => {
  console.log(`Request received: ${request.url}`);

  let statusCode = 200;
  let message;

  switch (request.url) {
    case '/':
      message = 'Welcome to Smart Utility Toolkit';
      break;
    case '/about':
      message = 'This is the About Page';
      break;
    case '/contact':
      message = 'This is the Contact Page';
      break;
    default:
      statusCode = 404;
      message = '404 - Page Not Found';
  }

  response.writeHead(statusCode, { 'Content-Type': 'text/plain' });
  response.end(message, () => {
    console.log('Response sent');
  });
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`Error: Port ${port} is already in use. Stop the other server and try again.`);
  } else {
    console.log(`Server error: ${error.message}`);
  }

  process.exitCode = 1;
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
