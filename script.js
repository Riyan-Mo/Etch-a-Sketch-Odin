const grid = document.querySelector('#grid')
const resetBtn = document.getElementById('resetBtn');
const sizeRange = document.getElementById('sizeRange');
const put = document.getElementById('put');
const eraseBtn = document.getElementById('eraseBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
let eraseMode = false;
let rainbowMode = false;
let universalColor = 'black';

rainbowBtn.addEventListener('click', function () {
  if (rainbowMode) {
    rainbowMode = false;
    universalColor = 'black';
    rainbowBtn.style.backgroundColor = 'indigo';
    rainbowBtn.style.color = 'white';
  }
  else {
    rainbowMode = true;
    rainbowBtn.style.backgroundColor = 'white';
    rainbowBtn.style.color = 'indigo';
  }
})

resetBtn.addEventListener('click', function () {
  fetch();
});
eraseBtn.addEventListener('click', function () {
  if (eraseMode) {
    eraseMode = false;
    universalColor = 'white';
    eraseBtn.style.backgroundColor = 'white';
    eraseBtn.style.color = 'black';
  }
  else {
    eraseMode = true;
    universalColor = 'black';
    eraseBtn.style.backgroundColor = 'black';
    eraseBtn.style.color = 'white';
  }
})

function fetch() {
  clearGrid();
  const get = document.getElementById('get').value;
  document.getElementById('put').value = get;
  createGrid(get);
  put.textContent = get;
}

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const canvas = document.createElement('div');
    canvas.addEventListener('mousedown', gridColor);
    canvas.addEventListener('mouseover', gridColor);
    grid.appendChild(canvas);
    grid.style.cssText = `grid-template-rows: repeat(${size}, 1fr);grid-template-columns: repeat(${size}, 1fr);`
  }
}
function clearGrid() {
  grid.textContent = "";
}
function gridColor(element) {
  if (rainbowMode) {
    universalColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  }
  element.target.style.backgroundColor = universalColor;
}
