const DOMSelectors = {
    form: document.querySelector("#form"), 
    dog: document.querySelector(".dog"),
    h2s: document.querySelectorAll(".h2"),
};
console.log(DOMSelectors.h2s);

DOMSelectors.form.addEventListener("submit", function(event){ 
event.preventDefault();
    
    //const Album = makeAlbum() 
    //addcard(Album);
    clearFields()
    remove()

    document
        .querySelector(".gallery")
        .insertAdjacentHTML(
        "beforebegin",
      //`<div class="card"><h2 class="card-title">${DOMSelectors.firstName.value}</h2></div>`
        `<div class="gallery" id="box">
        <h2 class="card-title">${DOMSelectors.dog.value}</h2>
        <img class="image" src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="">
        <button class="button">Remove</button>
        </div>`
    )

console.log(DOMSelectors.dog.value);
DOMSelectors.h2s.forEach((el) => (el.textContent = DOMSelectors.dog.value));
});

function clearFields() {

}

function makeAlbum() {

}

function remove() {
    const btn = document.querySelectorAll(".button");
    btn.forEach((button) => button.addEventListener("click", function(){
        button.parentElement.remove();
    }));
}
remove();
