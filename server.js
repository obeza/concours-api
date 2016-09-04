var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var mongoose = require('mongoose');
const cors = require('cors');

var db = mongoose.connect('mongodb://localhost/olivierb', (err)=>{
    if (err) return console.log(err);
});

// Toutes mes routes
var concoursRoute = require('./routes/concours');
const questionRoute = require('./routes/question');

var app = express();
app.use(bodyParser.json());
//app.use(express.static("public"));
//app.use('/images', express.static('public'));

//app.use(cors({credentials: true, origin: 'http://localhost:4200'})); 

app.use('/api-admin', concoursRoute);
app.use('/api-admin', questionRoute);

app.listen(8081, function () {
  console.log("La magie s'opère sur localhost:8081");
});