// Select color input
// Select size input
const size = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');
const color = document.getElementById('colorPicker');

// When size is submitted by the user, call makeGrid()

function makeGrid() {
   // Your code goes here!
   let gridHeight = document.getElementById('inputHeight').value;
   let gridWidth = document.getElementById('inputWidth').value;
   while (table.firstChild) {
    table.removeChild(table.firstChild);
    }
  // Creates rows
  for (let i = 1; i <= gridHeight; i++) {
    let gridRow = document.createElement('tr');
    table.appendChild(gridRow);
  // Creates cells  
    for (let j = 1; j <= gridWidth; j++) {
      let gridCell = document.createElement('td');
      gridRow.appendChild(gridCell);
      // Fills in cell with selected color when mouse click
      gridCell.addEventListener('click', function() {
        const color = document.getElementById('colorPicker').value;
        this.style.backgroundColor = color;
      })
    }
  }
}
size.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
  });  
