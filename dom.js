const DOMSelectors = {
    form: document.querySelector("#form"), //id
    firstName: document.querySelector(".first-name"), //class
    h2s: document.querySelectorAll("h2"),
    box: document.getElementById("box"),
    button: document.getElementById("btn"),
    //select the textbox
    //select ALL the h2s in one property 
};
console.log(DOMSelectors.form);
console.log(DOMSelectors.firstName);
console.log(DOMSelectors.h2s);
console.log(DOMSelectors.box);
console.log(DOMSelectors.button);

//DOMSelectors.box.insertAdjacentHTML

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    // need to add card/name object
    DOMSelectors.h2s.forEach(
        (el) => (el.textContent = DOMSelectors.firstName.value)
    );
});
