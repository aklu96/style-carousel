const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');
const controllers = require('./controllers');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));
const PORT = 3001;

app.use(express.json());

app.get('/api/items', controllers.getItems);

app.post('/api/items/:styleName', controllers.addToBag);

app.listen(PORT);
