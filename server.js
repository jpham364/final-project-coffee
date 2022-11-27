var path = require('path');
var express = require('express');
var expressbars = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;
app.set('view engine', 'handlebars')
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.listen(port, function () {
    console.log("Coffee Companion server is open", port);
  });