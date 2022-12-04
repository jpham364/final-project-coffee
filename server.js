var path = require('path');
var express = require('express');
var expressbars = require('express-handlebars');
var drinkData = require('./drinkData.json')


var app = express();
var port = process.env.PORT || 3000;
app.set('view engine', 'handlebars')
app.use(express.static('public'));



app.engine('handlebars', expressbars.engine({
  defaultLayout: "main"
}))
app.set('view engine', 'handlebars')
app.use(express.static('public'));

  app.get('/', function (req, res, next) {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
    next()
  });

  // app.get('/', function (req, res, next) {
  //   res.status(200).sendFile(path.join(__dirname, 'public', 'title.html'));
  //   next()
  // });

  app.get('*', function (req, res) {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
  })


app.listen(port, function () {
    console.log("Coffee Companion server is open on:", port);
  });