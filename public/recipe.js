/* send data to recipe */
var selector = ''
var drinktype = ''
var drinkSelected = []
function getTypeSelect(type){
    if(type == 'espresso'){
        selector = "espressoSelect"
        drinktype = type
    }
    if(type == 'filter'){
        selector = "filterSelect"
        drinktype = type
    }
}

function getDrinkSelect(){
    var drink = document.getElementById(selector).value.trim()
    drinkSelected = [drinktype, drink]
    return drinkSelected
}