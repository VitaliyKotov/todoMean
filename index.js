var express = require("express");
var mongoose = require('mongoose');
var mongodb = require("mongodb");
var bodyParser = require("body-parser");
var router = express.Router();

var url = 'mongodb://guest:guest1@ds161069.mlab.com:61069/9999';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected correctly to server.");
});

var app = express();
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require('./routes/routes.js')(app);

var server = app.listen(3000, function () {
  	var port = server.address().port;
  	console.log("App now running on port", port);
});

