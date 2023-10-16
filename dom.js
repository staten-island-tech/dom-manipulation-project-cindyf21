const DOMSelectors = {
    form: document.querySelector("#form"), //id
    firstName: document.querySelector(".first-name"), //class
    h2s: document.querySelectorAll("h2"),
    //select the textbox
    //select ALL the h2s in one property 
};
console.log(DOMSelectors.form);
console.log(DOMSelectors.firstName);
console.log(DOMSelectors.h2s);

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    // need to add card/name object
    DOMSelectors.h2s.forEach(
        (el) => (el.textContent = DOMSelectors.firstName.value)
    );
});
