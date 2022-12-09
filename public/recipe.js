/* send data to recipe */
var selector = ''
var drinktype = ''
var drinkSelected = []
function getTypeSelect(type){
    if(type == 'espresso'){
        console.log('espresso')
        selector = "espressoSelect"
        drinktype = type
    }
    if(type == 'filter'){
        console.log('filter')
        selector = "filterSelect"
        drinktype = type
    }
}

var drinkAddress = ''
function getDrinkSelect(){
    var drink = document.getElementById(selector).value.trim()
    console.log(drink)
    /*regex expression to remove spaces: https://stackoverflow.com/questions/6163169/replace-multiple-whitespaces-with-single-whitespace-in-javascript-string */
    drinkRet = (drink.replace(/ /g, ''))
    drinkR = drinkRet.toLowerCase()
    console.log(drinkR)
    drinkAddress = drinkR
    return drinkR
}

function drinkSubmit(){
    console.log("/r/" + drinkR)
    var address = "/r/" + drinkR
    window.open(address)
}