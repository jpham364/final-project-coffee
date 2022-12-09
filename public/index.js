var drinks = document.getElementsByClassName("drink")


for(let i = 0; i < drinks.length; i++){
    drinks[i].onclick= function(){window.open("/r", "_self")}
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

// Second Modal

var modal2 = document.getElementById("modal-backdrop2")
var backdrop2 = document.getElementById("bean-counter-modal2")
var notesInput = document.getElementById("note-input")
var modalclose2 = document.getElementById("modal-close2")

var beanEntries = Array.from(document.getElementsByClassName('beanEntry'))


// This function should build a modal of the information given to display for the user
// https://bobbyhadz.com/blog/javascript-add-event-listener-to-all-elements-with-class
beanEntries.forEach(beanEntry =>{
    beanEntry.addEventListener('click', function handler(event){
        console.log("entry clicked:", beanEntry.innerText)

        var beanName = document.getElementById("beanName1")
        beanName.textContent = beanEntry.dataset.name

        var weight = document.getElementById("weight")
        weight.textContent = beanEntry.dataset.weight
        
        var roast = document.getElementById("roast")    
        roast.textContent = beanEntry.dataset.roast  

        var notes = document.getElementById("notes")
        notes.textContent = beanEntry.dataset.notes

        // testing weight listener

        weight.addEventListener('click', function(){
            console.log("clicked weight!")
            var update = prompt("Update weight:")
            if (update == null || update == ""){
                return;
            }
            else{
                beanEntry.dataset.weight = update
                weight.textContent = beanEntry.dataset.weight
                updateWeightData(weight.textContent, beanName.textContent)
                modal2.style.display = "block"

            }
        })

        modal2.style.display = "block";
        backdrop2.style.display = "block";

    })
})


function updateWeightData(weight, name) {
    var reqUrl = window.location.pathname +"/updateWeight"
    // console.log("test:", reqUrl.weight);
    fetch(reqUrl, {
        method: "POST",
        body: JSON.stringify({
            beanName: name,
            weight: weight
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
}
// userData.addEventListener("click", function() {
//     modal2.style.display = "block";
//     backdrop2.style.display = "block";
// })

// userData.addEventListener("click", function(){
//     document.getElementById("modal-backdrop2").classList.remove("hidden")
//     document.getElementById("bean-counter-modal2").classList.remove("hidden")
// })

modalclose2.onclick = function(event){
    if (event.target == modalclose2) {
        modal2.style.display = "none";
        backdrop2.style.display = "none";

    }
}

window.onclick = function(event) {
    if (event.target == document.getElementById("bean-counter-modal2")) {
        modal2.style.display = "none";
        backdrop2.style.display = "none";
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

