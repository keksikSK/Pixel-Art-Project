// we are storing size, color and grid in variables using querrySelector method on particular ID's
const size = document.querySelector('#sizePicker');
const table = document.querySelector('#pixelCanvas');
const color = document.querySelector('#colorPicker');

// Grid will appear when width and height is submitted.
function makeGrid() {
    let gridHeight = document.querySelector('#inputHeight').value;
    let gridWidth = document.querySelector('#inputWidth').value;
    //removing old Grid if exist
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
//listening for submit button being hit, when it happen, it prevent any default function and use makeGrid() instead
size.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
});
