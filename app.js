const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.get('/detail', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/detail.html'));
});

app.use(express.static('public'));