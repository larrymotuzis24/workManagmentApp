const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static('build/static'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/build/index.html')));

module.exports = app 