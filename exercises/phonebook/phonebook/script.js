// GLOBAL VARIABELS
const nameInput = document.querySelector(".nameInput");
const numberInput = document.querySelector(".numberInput");
const addBtn = document.querySelector(".addBtn");
const container = document.querySelector(".container");

class Contact {
  constructor(name, number) {
    (this.name = name), (this.number = number);
  }
}

// UI functions
class UI {
  static addContact(person) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
        <p>${person.name}</p>
        <p>${person.number}</p>
        <button class="delBtn"> delete </button>
        `;
    container.appendChild(item);
  }
  static deleteContact(person) {
    person.remove();
  }
}

// Events
addBtn.addEventListener("click", () => {
  if (nameInput.value === "") {
    return alert("please enter your name !");
  }
  let person = new Contact(nameInput.value, numberInput.value);

  UI.addContact(person);
  nameInput.value = "";
  numberInput.value = "";
});

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("delBtn")) {
    const item = event.target.parentElement;
    const name = item.firstElementChild;
    // name.remove()
    UI.deleteContact(item);
    // console.log(name)
  }
});
