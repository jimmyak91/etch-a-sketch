var gridAxisSize = 16;
var container = document.querySelector('.container');
var gridSize = gridAxisSize * gridAxisSize;
function createGrid (size) {
    squareSize = 700 / gridAxisSize;
    console.log(squareSize);
    console.log(gridSize);
    for (let x = 0; x < gridSize; x++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'grid';
        newDiv.style.flex = '0 0 ' + squareSize + 'px';
        newDiv.style.height = squareSize + 'px';
        // newDiv.style.flexWrap = 'wrap'
        newDiv.style.width = squareSize + 'px';
        container.appendChild(newDiv);
    }

}

createGrid(gridSize);

const setColour = document.querySelector('#colour-picker');
const colour = document.querySelector('input');
var choosenColour;

colour.addEventListener('input', function( event ) {
    setColour.style.backgroundColor = this.value;
    choosenColour = setColour.style.backgroundColor;
  }, false);


const divChange = document.querySelectorAll('.grid');
console.log(divChange);

divChange.forEach(el => el.addEventListener('mouseover', event => {
    // console.log(event.target.getAttribute("data-el"));
    event.target.style.backgroundColor = choosenColour;
  }));

const clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", function( event ) {
    for (i = 0; i < divChange.length; i++) {
        divChange[i].style.backgroundColor = "";
        
    }
        clearButton.setAttribute('style', 'border: 3px solid #c7c7c7');
        // reset the color after a short delay
        setTimeout(function() {
            clearButton.style.border = "";
          }, 100);
  }, false);


//////////////////////////////

