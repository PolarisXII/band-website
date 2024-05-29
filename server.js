const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('pages'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/index.html'));
});

app.get('/band', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/band.html'));
});

app.get('/videos', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/videos.html'));
});

app.get('/photos', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/photos.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/contact.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});