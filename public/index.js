var drinks = document.getElementsByClassName("drink")


for(let i = 0; i < drinks.length; i++){
    drinks[i].onclick= function(){window.open("/recipe.html", "_self")}
}


var beanbutton = document.getElementById("bean-button")
beanbutton.addEventListener("click", function(){
    document.getElementById("modal-backdrop").classList.remove("hidden")
    document.getElementById("bean-counter-modal").classList.remove("hidden")
})

var modalclose = document.getElementById("modal-close")
modalclose.addEventListener("click", function(){
    document.getElementById("modal-backdrop").classList.add("hidden")
    document.getElementById("bean-counter-modal").classList.add("hidden")
})

var espressobutton = document.getElementById('espresso')
var filterbutton = document.getElementById('filter')
espressobutton.addEventListener("click", function(){
    espressobutton.style.textDecoration = "underline"
    filterbutton.style.textDecoration = "none"
    document.getElementById("espressoSelector").classList.remove("hidden")
    document.getElementById("filterSelector").classList.add("hidden")
})
filterbutton.addEventListener("click", function(){
    filterbutton.style.textDecoration = "underline"
    espressobutton.style.textDecoration = "none"
    document.getElementById("filterSelector").classList.remove("hidden")
    document.getElementById("espressoSelector").classList.add("hidden")
})



