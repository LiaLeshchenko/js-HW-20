
const input = document.querySelector("#controls input");
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.querySelector("#boxes");


renderBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);


function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomColor();
    box.style.margin = "5px";
    boxes.push(box);
    size += 10;
  }

  boxesContainer.append(...boxes);
}


function destroyBoxes() {
  boxesContainer.innerHTML = "";
}


function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
