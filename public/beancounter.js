
var modal = document.getElementById("modal-backdrop")
var backdrop = document.getElementById("bean-counter-modal")

// gathering array of beans 
var beanArray = []



// handling clicks from bean entries
var beanEntries = Array.from(document.getElementsByClassName('beanEntry'))

// This function should build a modal of the information given to display for the user
// https://bobbyhadz.com/blog/javascript-add-event-listener-to-all-elements-with-class
beanEntries.forEach(beanEntry =>{
    beanEntry.addEventListener('click', function handler(event){
        console.log("entry clicked:", beanEntry.innerText)

    })
})

// for adding another element
var insertBeanButton = document.getElementById('modal-submit')
insertBeanButton.addEventListener('click', function(){


    // gathering variables from modal
    var nameTitle = document.getElementById('name-input').value.trim();
    var weight = document.getElementById('weight-input').value.trim();
    var roast = document.querySelector('#roast-level-fieldset input:checked').value;
    var notes = document.getElementById('note-input').value.trim();

    if(!nameTitle || !weight){
        alert("Please have a name and weight of your bag. ")
    }
    else{
        

        // after when inputs have been put 
        addBeanData(nameTitle, weight, roast, notes);



        modal.style.display = "none";
        backdrop.style.display = "none";
        clearBeans();
    
    }
    
})


    
function addBeanData(name, weight, roast, note) {

    // adding HTML for tab 
    var beanHTML = Handlebars.templates.bean({

        beanName: name,
        weight: weight,
        roast: roast,
        notes: note

    })

    console.log("== bean entry:", beanHTML);

    var beanSection = document.getElementById('bean-section');
    beanSection.insertAdjacentHTML("beforeend", beanHTML)
    
}

// clears inputs on exit
function clearBeans(){
    document.getElementById('name-input').value = "";
    document.getElementById('weight-input').value = "";
    document.getElementById('roast-level-light').checked = true
    document.getElementById('note-input').value = "";
}