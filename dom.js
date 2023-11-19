DOMSelectors = {
  form: document.getElementById("form"),
  input: document.getElementById("input"),
  animal: document.getElementById("animal"),
  color: document.getElementById("color"),
  petname: document.getElementById("petname"),
  output: document.getElementById("output"),
  image: document.getElementById("image"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  makeAlbum();
  clearFields();
  remove();
});

function makeAlbum() {
  animal = DOMSelectors.animal.value;
  color = DOMSelectors.color.value;
  petname = DOMSelectors.petname.value;
  image = DOMSelectors.image.value;

  DOMSelectors.output.insertAdjacentHTML(
    "afterbegin",
    `<div class="output">
            <p class="description" > ${petname}: ${color} ${animal} </p>
            <img class="image" src="${image}">
            <div> <button class="button"> Remove </button> </div>
    </div>`
  );
}

function clearFields() {
    DOMSelectors.animal.value = "";
    DOMSelectors.color.value = "";
    DOMSelectors.petname.value = "";
    DOMSelectors.image.value = "";
}

function remove() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.addEventListener("click", function() {
      this.parentElement.parentElement.remove();
    });
  });
}

  
    




