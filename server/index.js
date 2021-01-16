const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const controllers = require('./controllers');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/items', controllers.getItems);

app.listen(PORT);
