
var modal = document.getElementById("modal-backdrop")
var backdrop = document.getElementById("bean-counter-modal")

// gathering array of beans 
var beanArray = []

// modal 2
// var modal2 = document.getElementById("modal-backdrop2")
// var backdrop2 = document.getElementById("bean-counter-modal2")
// var notesInput = document.getElementById("note-input")
// var modalclose2 = document.getElementById("modal-close2")

// // // handling clicks from bean entries
// var beanEntries = Array.from(document.getElementsByClassName('beanEntry'))

// // This function should build a modal of the information given to display for the user
// // https://bobbyhadz.com/blog/javascript-add-event-listener-to-all-elements-with-class
// beanEntries.forEach(beanEntry =>{
//     beanEntry.addEventListener('click', function handler(event){
//         console.log("entry clicked:", beanEntry.innerText)
//         modal2.style.display = "block";
//         backdrop2.style.display = "block";

//     })
// })

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

    var reqUrl = window.location.pathname + "/addBean"

    fetch(reqUrl, {
        method: "POST",
        body: JSON.stringify({
            beanName: name,
            weight: weight,
            roast: roast,
            notes: note
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (res){
        if (res.status === 200){
            // adding HTML for tab 
            var beanHTML = Handlebars.templates.bean({

                beanName: name,
                weight: weight,
                roast: roast,
                notes: note

            })

            var beanSection = document.getElementById('bean-section');
            beanSection.insertAdjacentHTML("beforeend", beanHTML);

        }
        else{
            alert("Something went wrong with the server!")
        }
    }).catch(function(err){
        alert("Something went wrong communicating with the server!")
    })

    
}

// clears inputs on exit
function clearBeans(){
    document.getElementById('name-input').value = "";
    document.getElementById('weight-input').value = "";
    document.getElementById('roast-level-light').checked = true
    document.getElementById('note-input').value = "";
}