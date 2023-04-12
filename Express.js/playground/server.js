const express = require('express');
const app = express();



// Local Middleware
const authenticate = (req, res, next) => {
  // Perform authentication logic here
  if (req.headers.authorization === 'my-secret-token') {
    next(); // If authenticated, pass control to the next middleware or route handler
  } else {
    res.status(401).send('Unauthorized'); // If not authenticated, send 401 Unauthorized response
  }
};

// Route with local and global middleware
app.get('/protected', authenticate, (req, res) => {
  console.log('Local Middleware executed.'); // Local middleware
  res.send('This is a protected route.');
});

// Global Middleware
app.use((req, res, next) => {
  console.log('Global Middleware executed.'); // Global middleware
  next(); // Pass control to the next middleware or route handler
});

// Route without middleware
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
