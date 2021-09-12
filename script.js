const DEFAULT_COLOUR = "#333333";
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'colour';

let currentColour = DEFAULT_COLOUR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

function setCurrentColour(newColour) {
    currentColour = newColour;
}

function setCurrentMode(newMode) {
    currentMode = newMode;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}




var gridAxisSize = 16;
var container = document.querySelector('.container');
var gridSize = gridAxisSize * gridAxisSize;
function createGrid (size) {
    squareSize = 600 / gridAxisSize;
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

// createGrid(gridSize);

const setColour = document.querySelector('#colour-picker');
const colour = document.querySelector('input');
var choosenColour = '#333333';

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
// MOUSE OVER STYLES

// clearButton.addEventListener('mouseenter', function( event ) {
//     clearButton.setAttribute('style', 'zoom: 120%;');
// });

// clearButton.addEventListener('mouseleave', function( event ) {
//     clearButton.setAttribute('style', 'zoom: 100%;');
// });

// setColour.addEventListener('mouseenter', function( event ) {
//     setColour.setAttribute('style', 'zoom: 120%;');
// });

// setColour.addEventListener('mouseleave', function( event ) {
//     setColour.setAttribute('style', 'zoom: 100%;');

// });

function changeColor(e) {
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'colour') {
      e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe'
    }
  }


function activateButton(newMode) {
    if (currentMode === 'rainbow') {
      rainbowBtn.classList.remove('active')
    } else if (currentMode === 'color') {
      colorBtn.classList.remove('active')
    } else if (currentMode === 'eraser') {
      eraserBtn.classList.remove('active')
    }
  
    if (newMode === 'rainbow') {
      rainbowBtn.classList.add('active')
    } else if (newMode === 'color') {
      colorBtn.classList.add('active')
    } else if (newMode === 'eraser') {
      eraserBtn.classList.add('active')
    }
  }
  
  window.onload = () => {
    createGrid(DEFAULT_SIZE)
    console.log("On WIndow load")
    // activateButton(DEFAULT_MODE)
  }