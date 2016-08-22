const http = require('http');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grocery-list');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended : false}));

// Set our routes
app.use('/', index);

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
