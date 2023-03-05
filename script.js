const DEFAULT_COLOR = '#33333';
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'paint';

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;

const colorPicker = document.getElementById("colorpicker")
const testBox = document.getElementsByClassName("test-box")
const checkBox = document.querySelector(".check")
const grid = document.querySelector(".grid")


function updateColor(newColor) {
    currentColor = newColor
}

function checkColor() {
    console.log(currentColor)
    
}

function bgChange(e) {
    e.target.style.backgroundColor = currentColor;
    console.log(e);
  }

  function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div')
      gridElement.classList.add('grid-element')
      gridElement.addEventListener('mouseover', changeColor)
      gridElement.addEventListener('mousedown', changeColor)
      grid.appendChild(gridElement)
    }
  }

  function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = currentColor
  }

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

checkBox.addEventListener("click", checkColor)
checkBox.addEventListener("click", bgChange)
colorPicker.oninput = (event) => updateColor(event.target.value);

window.onload = () => {
    setupGrid(DEFAULT_SIZE)
  }