
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');

app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));
module.exports = app;