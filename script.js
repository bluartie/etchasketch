let sliderVal = document.querySelector("input");

displayGridSize();
populateGrid(sliderVal);
changeColors();

sliderVal.addEventListener("input", () => {
    displayGridSize();
    clearGrid();
    populateGrid(sliderVal);
    changeColors();
    });


   


function displayGridSize() {
    let sliderDisplay = document.querySelector("output");

    sliderDisplay.textContent = sliderVal.value + "x" + sliderVal.value;
}
function changeColors() {
    document.querySelectorAll(".row").forEach(row => row.addEventListener("mouseover", () => {
        row.style.backgroundColor = "black"  
      }));
    
      let reset = document.querySelector(".resetbutton");
    document.querySelectorAll(".row").forEach(row =>reset.addEventListener("click", () => {
        row.style.backgroundColor = "white"
    }));
};
function clearGrid() {
document.querySelectorAll(".row").forEach(row => row.remove());
document.querySelectorAll(".column").forEach(column => column.remove());
}
function populateGrid(num) {
    for(let i=0; i<num.value;i++) {
        let column = document.createElement("div")
        column.setAttribute("class", "column")
        document.querySelector(".container").appendChild(column);
    
        for(let i=0; i<num.value;i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    column.appendChild(row);
        }
    }
}
