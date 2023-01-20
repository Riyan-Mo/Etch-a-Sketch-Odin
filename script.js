const grid = document.querySelector('#grid')
function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const canvas = document.createElement('div');
    canvas.setAttribute('class', `canvas-${i}`);
    grid.appendChild(canvas);
    grid.style.cssText = `grid-template-rows: repeat(${size}, 1fr);grid-template-columns: repeat(${size}, 1fr);`
  }
}
createGrid(40);