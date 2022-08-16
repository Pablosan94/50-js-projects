const SQUARES = 220;
const COLORS = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

const container = document.getElementById('container');

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => addColor(square));
  square.addEventListener('mouseout', () => removeColor(square));
  container.appendChild(square);
}

function addColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 4px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px black';
}

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}
