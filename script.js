const DEFAULT_COLOUR = "#427DAD";
const DEFAULT_SIZE = 32;
const DEFAULT_MODE = 'colour';

let currentColour = DEFAULT_COLOUR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

const setColour = document.querySelector('#colour-picker');
const colour = document.querySelector('input');
var choosenColour = '#427DAD';

const container = document.querySelector('.container');


//Change Drawing Settings Functions
function setCurrentColour(newColour) {
    currentColour = newColour;
}
function setCurrentMode(newMode) {
  activateButton(newMode);  
  currentMode = newMode;
}
function setCurrentSize(newSize) {
    currentSize = newSize;
}


//Create Grid per specified size eg 16x16
function createGrid (size) {
    var container = document.querySelector('.container');
    var gridSize = currentSize * currentSize;
    squareSize = 500 / currentSize;
    console.log(squareSize);
    console.log(gridSize);
    for (let x = 0; x < gridSize; x++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'grid';
        newDiv.style.flex = '0 0 ' + squareSize + 'px';
        newDiv.style.height = squareSize + 'px';
        newDiv.style.width = squareSize + 'px';
        newDiv.addEventListener('mouseover', changeColor);
        container.appendChild(newDiv);
    }

}


const divChange = document.querySelectorAll('.grid');
const clearButton = document.querySelector('#clear');

//Grid Functions
function clearGrid() {
  container.innerHTML = "";
}
function reloadGrid() {
  clearGrid();
  createGrid(currentSize);
}
function changeGridSize(newGridSize) {
  console.log(newGridSize);
  setCurrentSize(newGridSize);
  console.log(currentSize);
  reloadGrid();
}


clearButton.onclick = () => reloadGrid()
colour.onchange = (e) => setCurrentColour(e.target.value);


var sizeSlider = document.querySelector('#sizeSlider');

sizeSlider.onchange = (e) => changeGridSize(e.target.value);
sizeSlider.onmousemove = (e) => changeSizeDisplay(e.target.value);

var sizeDisplay = document.querySelector('#sizeDisplay');
function changeSizeDisplay (displayValue) {
  sizeDisplay.innerHTML = `${displayValue} x ${displayValue}`;
}



colour.addEventListener('input', function( event ) {
    setColour.style.backgroundColor = this.value;
  }, false);

function changeColor(e) {
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'colour') {
      e.target.style.backgroundColor = currentColour;
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe'
    }
  }


  var colourBtn = document.querySelector('#colourButton');
  var rainbowBtn = document.querySelector('#rainbowButton');
  var eraserBtn = document.querySelector('#eraserButton');

colourBtn.onclick = () => setCurrentMode('colour');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
eraserBtn.onclick = () => setCurrentMode('eraser');

function activateButton(newMode) {
    if (currentMode === 'rainbow') {
      rainbowBtn.classList.remove('active')
    } else if (currentMode === 'colour') {
      colourBtn.classList.remove('active')
    } else if (currentMode === 'eraser') {
      eraserBtn.classList.remove('active')
    }
  
    if (newMode === 'rainbow') {
      rainbowBtn.classList.add('active')
    } else if (newMode === 'colour') {
      colourBtn.classList.add('active')
    } else if (newMode === 'eraser') {
      eraserBtn.classList.add('active')
    }
  }

document.getElementById("sizeSlider").oninput = function() {
  var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #427DAD 0%, #427DAD ' + value + '%, #fff ' + value + '%, white 100%)'
};

window.onload = () => {
  createGrid(DEFAULT_SIZE);
  console.log("On WIndow load")
  activateButton(DEFAULT_MODE)
}

