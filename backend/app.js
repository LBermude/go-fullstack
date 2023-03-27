
const express = require('express');
const app = require('express')();
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/stuff', stuffRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));
module.exports = app;