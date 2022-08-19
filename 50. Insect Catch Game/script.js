const screens = document.querySelectorAll('.screen');
const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn');
const startBtn = document.getElementById('start-btn');
const gameContainer = document.getElementById('game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');

let seconds = 0;
let score = 0;
let selectedInsect = {};
let interval;

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    gameContainer.querySelectorAll('.insect').forEach((insect) => {
      insect.remove();
    });
    message.classList.add('visible');
    message.innerText = 'You escaped the game!';
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
});

startBtn.addEventListener('click', () => screens[0].classList.add('up'));

chooseInsectBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    selectedInsect = { src, alt };
    screens[1].classList.add('up');
    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  interval = setInterval(increaseTime, 1000);
}

function increaseTime() {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;

  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;

  timeEl.innerHTML = `Time: ${min}:${sec}`;
  seconds++;
}

function increaseScore() {
  score++;
  if (score === 20) {
    message.classList.add('visible');
    setTimeout(() => {
      message.classList.remove('visible');
    }, 5000);
  }
  scoreEl.innerHTML = `Score: ${score}`;
}

function createInsect() {
  const insect = document.createElement('div');
  insect.classList.add('insect');
  const { x, y } = getRandomLocation();
  insect.style.left = `${x}px`;
  insect.style.top = `${y}px`;
  insect.innerHTML = `
    <img src="${selectedInsect.src}" alt="${
    selectedInsect.alt
  }" style="transform: rotate(${Math.random() * 360}deg)" />
  `;

  gameContainer.appendChild(insect);
  insect.addEventListener('click', () => {
    catchInsect(insect);
  });
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;

  return { x, y };
}

function catchInsect(insect) {
  increaseScore();
  insect.classList.add('caught');
  setTimeout(() => insect.remove(), 0);
  addInsects();
}

function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}
