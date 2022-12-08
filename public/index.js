var drinks = document.getElementsByClassName("drink")


for(let i = 0; i < drinks.length; i++){
    drinks[i].onclick= function(){window.open("/recipe.html", "_self")}
}



var modal = document.getElementById("modal-backdrop")
var backdrop = document.getElementById("bean-counter-modal")
var nameInput = document.getElementById("name-input")
var weightInput = document.getElementById("weight-input")
var roastFieldset = document.getElementById("roast-level-light")
var notesInput = document.getElementById("note-input")
var modalclose = document.getElementById("modal-close")
var beanbutton = document.getElementById("bean-button")

beanbutton.addEventListener("click", function() {
    modal.style.display = "block";
    backdrop.style.display = "block";
})

beanbutton.addEventListener("click", function(){
    document.getElementById("modal-backdrop").classList.remove("hidden")
    document.getElementById("bean-counter-modal").classList.remove("hidden")
})

modalclose.onclick = function(event){
    if (event.target == modalclose) {
        modal.style.display = "none";
        backdrop.style.display = "none";
        nameInput.value = "";
        weightInput.value = "";
        roastFieldset.checked = true;
        notesInput.value = "";
    }
}

window.onclick = function(event) {
    if (event.target == document.getElementById("bean-counter-modal")) {
        modal.style.display = "none";
        backdrop.style.display = "none";
        nameInput.value = "";
        weightInput.value = "";
        roastFieldset.checked = true;
        notesInput.value = "";
    }
}

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


// timer
import Timer from "/timer.js";

new Timer (
    document.querySelector(".timer")
);


// helper functions




