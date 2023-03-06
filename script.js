const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'paint'
const DEFAULT_SIZE = '16'

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

//elements
const grid = document.querySelector('.grid')
const paintBtn = document.querySelector('.paint')
const eraseBtn = document.querySelector('.erase')
const rainbowBtn = document.querySelector('.rainbow')
const changeBgc = document.querySelector('.memorize')
const clearBtn = document.querySelector('.clear')
const colorPicker = document.getElementById('colorPicker')
const sizeSlider = document.getElementById('sizeSlider')


//settings functions
function setCurrentColor(newColor) {
    currentColor = newColor
}

function setCurrentMode(newMode) {
    currentMode = newMode
}

//events
sizeSlider.onchange = (event) => changeSize(event.target.value)
colorPicker.oninput = (event) => setCurrentColor(event.target.value)
paintBtn.onclick = () => setCurrentMode('paint')
eraseBtn.onclick = () => setCurrentMode('erase')
rainbowBtn.onclick = () => setCurrentMode('rainbow')
clearBtn.onclick = () => reloadGrid()
changeBgc.onclick = () => grid.style.backgroundColor = currentColor

//grid functions
function setCurrentSize(newSize) {
    currentSize = newSize
}

function changeSize(value) {
    setCurrentSize(value)
    updateSizeValue(value)
    reloadGrid()
}

function reloadGrid() {
    clearGrid()
    setGrid(currentSize)
}

function clearGrid() {
    grid.innerHTML =''
}

function setGrid(size) {
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`

        for (let i = 0; i < size * size; i++) {
            const gridChild = document.createElement('div')
            gridChild.addEventListener('mouseover', changeColor)
            gridChild.addEventListener('mousedown', changeColor)
            grid.appendChild(gridChild)
        }
}

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
}

//paint functions

function changeColor(event) {
    if (event.type === 'mouseover' && !mouseDown) return
    switch(currentMode) {
        case 'paint' :
            event.target.style.backgroundColor = currentColor
            break;
        case 'erase' :
            event.target.style.backgroundColor = grid.style.backgroundColor
            break;
        case 'rainbow' :
            const randomR = Math.floor(Math.random() * 256)
            const randomG = Math.floor(Math.random() * 256)
            const randomB = Math.floor(Math.random() * 256)
            event.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
            break;
    }
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

window.onload = () => {
    setGrid(DEFAULT_SIZE)
}