DOMSelectors = {
    form: document.getElementById("form"),
    input: document.getElementById("input"),
    animal: document.getElementById("animal"),
    color: document.getElementById("color"),
    imagelink: document.getElementById("imagelink"),
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
    imagelink = DOMSelectors.imagelink.value;
  
    DOMSelectors.output.insertAdjacentHTML(
      "afterbegin",
      `<div class="output">
              <p class="description" > ${color} ${animal} </p>
              <img class="image" src="">
              <div> <button class="button"> Remove </button> </div>
      </div>`
    );
  }
  
  function clearFields() {
      DOMSelectors.animal.value = "";
      DOMSelectors.color.value = "";
      DOMSelectors.imagelink.value = "";
  }
  
  function remove() {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
      button.addEventListener("click", function() {
        this.parentElement.parentElement.remove();
      });
    });
  }
  
    




