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
    clearBeans();
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

// for adding another element
var insertBeanButton = document.getElementById('modal-submit')
insertBeanButton.addEventListener("click", function(){
    
})

// handling clicks from bean entries
var beanEntries = Array.from(document.getElementsByClassName('beanEntry'))

// This function should build a modal of the information given to display for the user
// https://bobbyhadz.com/blog/javascript-add-event-listener-to-all-elements-with-class
beanEntries.forEach(beanEntry =>{
    beanEntry.addEventListener('click', function hanlder(event){
        console.log("entry clicked:", beanEntry.innerText)

    })
})
    




// timer
import Timer from "/timer.js";

new Timer (
    document.querySelector(".timer")
);


// helper functions


// clears inputs on exit
function clearBeans(){
    document.getElementById('name-input').value = "";
    document.getElementById('weight-input').value = "";
    document.getElementById('light').checked = true
    document.getElementById('note-input').value = "";
}