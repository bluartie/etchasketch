let container = document.querySelector(".container");
let sliderVal = document.querySelector("input");
let sliderDisplay = document.querySelector("output");
let reset = document.querySelector(".resetbutton");
sliderDisplay.textContent = sliderVal.value + "x" + sliderVal.value;

populateGrid(sliderVal)

sliderVal.addEventListener("input", () => {
    rows = document.querySelectorAll(".row");
    sliderDisplay.textContent = sliderVal.value + "x" + sliderVal.value;
    clearGrid();
    populateGrid(sliderVal);
    });


   

document.querySelectorAll(".row").forEach(row => row.addEventListener("mouseover", () => {
    row.style.backgroundColor = "black"  
  }));

document.querySelectorAll(".row").forEach(row =>reset.addEventListener("click", () => (
    row.style.backgroundColor = "white"
)));


function clearGrid() {
document.querySelectorAll(".row").forEach(row => row.remove());
document.querySelectorAll(".column").forEach(column => column.remove());
}
function populateGrid(num) {
    for(let i=0; i<num.value;i++) {
        let column = document.createElement("div")
        column.setAttribute("class", "column")
        container.appendChild(column);
    
        for(let i=0; i<num.value;i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    column.appendChild(row);
        }
    }
}
