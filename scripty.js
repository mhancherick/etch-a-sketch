const cdiv = document.querySelector('.container');
const resetButton = document.querySelector(".reset");
let gridSize;

for (let i = 1; i < 257; i++) {
  const tdiv = document.createElement('div');
  tdiv.classList.add("box");
  tdiv.style.height = "60px";
  tdiv.style.width = "60px";
  cdiv.appendChild(tdiv);
}

resetButton.addEventListener("click", () => {
gridSize = prompt("How wide is the grid?")
if(gridSize > 100 || gridSize < 0){
    gridSize = 16
    alert("Grid size invalid. Set to default.")
}
clearGrid();
newGrid();
});

function clearGrid() {
    cdiv.textContent = "";
}

function newGrid() {
    let gridElements = gridSize * gridSize;
    let divHeight = 960/gridSize;
    let divWidth = divHeight;
    for (let i = 1; i < gridElements + 1; i++) {
        const tdiv = document.createElement('div');
        tdiv.classList.add("box");
        tdiv.style.height = divHeight + "px";
        tdiv.style.width = divWidth + "px";
        cdiv.appendChild(tdiv);
      }
}

const item = document.querySelectorAll('.box');
  item.forEach((tdiv) => {
    tdiv.addEventListener('mouseover', () => {
      tdiv.style.background = "black";
    });
  });

