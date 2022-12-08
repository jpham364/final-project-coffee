var path = require('path');
var express = require('express');
var expressbars = require('express-handlebars');
var recipeData = require('./recipeData.json');
const { resourceUsage } = require('process');


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
    
    res.status(200).sendFile(__dirname + '/public/index.html');
    // next()
  });

  
  // creating routing for espresso and filter pages
  app.get('/e', function (req, res, next){
    res.status(200).sendFile(__dirname + '/public/espresso.html');
  })

  app.get('/f', function (req, res, next){
    res.status(200).sendFile(__dirname + '/public/filter.html');
  })

  // beginning to route drinks

  // the default drink when entering /r
  app.get('/r', function (req, res, next){
    
    var defaultDrink = recipeData.espresso["affogato"]

    res.status(200).render('recipePage', {
      name: defaultDrink.name,
      img: defaultDrink.img,
      ingredients: defaultDrink.ingredients,
      howto: defaultDrink.howto,
      diff: defaultDrink.diff
    })

  })



  app.get('/r/:drink', function(req, res, next){
    console.log(" --req.params:", req.params)

    var drink = req.params.drink.toLowerCase()

    var espressoData = recipeData.espresso[drink]
    var filterData = recipeData.filter[drink]

    // checks if the parameters match any of the drinks
    if (espressoData){
      console.log("== data for", drink, ":", espressoData)
      res.status(200).render('recipePage', {
        name: espressoData.name,
        img: espressoData.img,
        ingredients: espressoData.ingredients,
        howto: espressoData.howto,
        diff: espressoData.diff
      })
      
    }

    if (filterData){
      console.log("== data for", drink, ":", filterData)
      res.status(200).render('recipePage', {
        name: filterData.name,
        img: filterData.img,
        ingredients: filterData.ingredients,
        howto: filterData.howto,
        diff: filterData.diff
      })
    }

    if (!filterData && !espressoData){
        next();
    }
      

  })

  app.get('*', function (req, res) {
    res.status(404).sendFile(__dirname + '/public/404.html');
  })


app.listen(port, function () {
    console.log("Coffee Companion server is open on:", port);
  });


//this is the way to access for the handlebar
/* console.log(recipeData.espresso['Affogato']) */