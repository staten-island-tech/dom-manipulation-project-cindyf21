const DOMSelectors = {
    form: document.querySelector("#form"), //id
    firstName: document.querySelector(".first-name"), //class
    h2s: document.querySelectorAll("h2"),
};
console.log(DOMSelectors.form);
console.log(DOMSelectors.firstName);
console.log(DOMSelectors.h2s);


DOMSelectors.form.addEventListener("submit", function(event){ 
    event.preventDefault();
    
    const Album = makeAlbum() 
    addcard(Album)
    clearFields()
    addREmoveButtons()
    
    document.querySelector(".gallery")
    document.insertAdjacentHTML(
    "afterbegin",
    `<div class="card"><hs class="card-title">${DOMSelectors.firstName.value}</h2></div>`
    );
    
console.log(DOMSelectors.firstName.value);
DOMSelectors.h2s.forEach((el) => (el.textContent = DOMSelectors.firstName.value));
});

