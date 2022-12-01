function drinkClick(name, type){
    /*send name to drop downs? */
    console.log(name)
    console.log(type)
    window.open("recipe.html","_self")
}

let cancelButton = document.getElementById('modal-cancel')
let closeButton = document.getElementById('modal-close')
cancelButton.addEventListener("click", () => {
    modal.classList.add('hidden')
    modalBackdrop.classList.add('hidden')
});

