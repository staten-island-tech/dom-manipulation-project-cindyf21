const DOMSelectors = {
    form: document.querySelector("#form"), 
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
};
console.log(DOMSelectors.h2s);

DOMSelectors.form.addEventListener("submit", function(event){ 
event.preventDefault();
    
    //const Album = makeAlbum() 
    //addcard(Album);
    //clearFields()
    //addRemoveButtons()

    document
        .querySelector(".gallery")
        .insertAdjacentHTML(
        //"afterend", 
        "beforebegin",
        //"afterbegin",

      //`<div class="card"><h2 class="card-title">${DOMSelectors.firstName.value}</h2></div>`
        `<div class="gallery" id="box">
        <h2 class="card-title">${DOMSelectors.firstName.value}</h2>
        <img class="image" src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="">
        <button class="button">Remove</button>
        </div>`
    )

console.log(DOMSelectors.firstName.value);
DOMSelectors.h2s.forEach((el) => (el.textContent = DOMSelectors.firstName.value));
});



function makeAlbum() {

}

function addcard() {

}

function clearFields() {

}

function addRemoveButton() {

}     

