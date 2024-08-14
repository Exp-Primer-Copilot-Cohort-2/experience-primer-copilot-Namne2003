// Create web server 
// Listen for incoming requests
// Parse the request
// Get the comments
// Return the comments

// 1. Create web server
const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end('Hello World\n');
});

// 2. Listen for incoming requests
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// 3. Parse the request
// 4. Get the comments
// 5. Return the comments