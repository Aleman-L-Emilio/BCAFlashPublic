const http = require('http');
const express = require('express');
const path = require('path');
const logger = require('morgan');

const PORT = Process.env.PORT || 3000;
// Create "app" - handler for http requests
const app = express();

// Middleware to log http requests
app.use(logger('dev'));
// Middleware to handle static requests
app.use(express.static(path.join(__dirname, 'public')));

// Routes!
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});
app.get('/courses', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'courses.html'));
});
app.get('/our-team', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'our-team.html'));
});
app.get('/404', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT);

// const server = http.createServer(app);
// server.listen(PORT);
// console.log(`HTTP server listening at http://localhost:${PORT}`);
