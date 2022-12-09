var path = require('path');
var express = require('express');
var expressbars = require('express-handlebars');
var recipeData = require('./recipeData.json');
const { resourceUsage } = require('process');


var app = express();
var port = process.env.PORT || 3000;
app.set('view engine', 'handlebars')

// added json express
app.use(express.json())
app.use(express.static('public'));

// add fs module
var fs = require('fs')


// gather bean data
var beanData = require("./counterData.json")
console.log("-- beanData:", beanData)

app.engine('handlebars', expressbars.engine({
  defaultLayout: "main"
}))
app.set('view engine', 'handlebars')
app.use(express.static('public'));

  app.get('/', function (req, res, next) {
    
    res.status(200).sendFile(__dirname + '/public/index.html');
      next()
  });

  
  // creating routing for espresso and filter pages
  app.get('/e', function (req, res, next){
    res.status(200).sendFile(__dirname + '/public/espresso.html');
  })

  app.get('/f', function (req, res, next){
    res.status(200).sendFile(__dirname + '/public/filter.html');
  })



  // the default drink when entering /r
  app.get('/r', function (req, res, next){
    
    var defaultDrink = recipeData.espresso["affogato"]

    res.status(200).render('recipePage', {
      name: defaultDrink.name,
      img: defaultDrink.img,
      ingredients: defaultDrink.ingredients,
      howto: defaultDrink.howto,
      diff: defaultDrink.diff,

      beanArray: beanData,
      isDrink: false,
      isSelection: true
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
        diff: espressoData.diff,

        beanArray: beanData,
        isDrink: true,
        isSelection: false
      })
    }

    if (filterData){
      console.log("== data for", drink, ":", filterData)
      res.status(200).render('recipePage', {
        name: filterData.name,
        img: filterData.img,
        ingredients: filterData.ingredients,
        howto: filterData.howto,
        diff: filterData.diff,

        beanArray: beanData,
        isDrink: true,
        isSelection: false
      })
    }

    if (!filterData && !espressoData){
        next();
    }
      
  })


  // // posting data 
  // app.post('/r/addBean', function(req, res, next){
  //   console.log(" -- req.body", req.body)
  //   // data verification
  //   if (req.body && req.body.beanName && req.body.weight){


  //     next();
  //   }
  //   else{
  //     res.status(400).send("Request didn't have a bdoy with a 'beanName' and 'weight'"  )
  //   }

    
  // })

  // app.post('/r/:drink/addBean', function(req, res, next){
  //   console.log(" -- req.body", req.body)
  //   next();
  // })

  app.post('/r/:drink?/updateWeight', function(req, res, next){
    // loop through each beanData index
    console.log("weight request:", req.body)
    if (req.body && req.body.weight){

      for (var i = 0; i < beanData.length; i++){
        // if the request matches the beanName
        if(req.body.beanName == beanData[i].beanName){
          beanData[i].weight = req.body.weight; 
          break;
        }
      }

      fs.writeFile(
        './counterData.json',
        JSON.stringify(beanData, null, 2),
        function(err){
          if (err){
            res.status(500).send("Error database")
          }
          else{
            res.status(200).send("Weight successfully updated")
          }
        }
      )
      
    }
      
  })

  // https://stackoverflow.com/questions/39731593/get-method-with-colon-and-question-mark-in-server-path
  app.post('/r/:drink?/addBean', function(req, res, next){
    console.log(" -- req.body", req.body)
    // data verification
    if (req.body && req.body.beanName && req.body.weight){
      var bean = {
        beanName: req.body.beanName,
        weight: req.body.weight,
        roast: req.body.roast,
        notes: req.body.notes
      }

      beanData.push(bean)
      console.log(" -- beanData", beanData)
      

      fs.writeFile(
        './counterData.json',
        JSON.stringify(beanData, null, 2),
        function(err){
          if (err){
            res.status(500).send("Error database")
          }
          else{
            res.status(200).send("Bean data successfully added")
          }
        }
      )

    }
    else{
      res.status(400).send("Request didn't have a bdoy with a 'beanName' and 'weight'"  )
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