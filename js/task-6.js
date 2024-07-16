function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const controls = document.getElementById("controls");
  const inputField = controls.querySelector('input[type="number"]');
  const createButton = controls.querySelector("[data-create]");
  const destroyButton = controls.querySelector("[data-destroy]");
  const boxesContainer = document.getElementById("boxes");

 
  function createBoxes(amount) {
    boxesContainer.innerHTML = ""; 
    let size = 30;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box);
      size += 10; 
    }
    boxesContainer.appendChild(fragment); 
  }

 
  function destroyBoxes() {
    boxesContainer.innerHTML = ""; 
  }


  createButton.addEventListener("click", function () {
    const amount = Number(inputField.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      inputField.value = ""; 
    } else {
      alert("Please enter a number between 1 and 100.");
    }
  });

 
  destroyButton.addEventListener("click", destroyBoxes);
});
