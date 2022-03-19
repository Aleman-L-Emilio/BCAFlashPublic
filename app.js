const http = require('http');
const express = require('express');
const path = require('path');
const logger = require('morgan');

const PORT = 3000;
// Create "app" - handler for http requests
const app = express();

// Middleware to log http requests
app.use(logger('dev'));
// Middleware to handle static requests
app.use(express.static(path.join(__dirname)));

// Routes!
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});
app.get('/courses', (req, res) => {
  res.sendFile(path.join(__dirname, 'courses.html'));
});
app.get('/our-team', (req, res) => {
  res.sendFile(path.join(__dirname, 'our-team.html'));
});
app.get('/404', (req, res) => {
  res.sendFile(path.join(__dirname, '404.html'));
});

//app.listen(Process.env.PORT || 3000);

const server = http.createServer(app);
server.listen(PORT);
console.log(`HTTP server listening at http://localhost:${PORT}`);
