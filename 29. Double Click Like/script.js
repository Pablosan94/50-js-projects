const loveMe = document.querySelector('.loveMe');
const times = document.getElementById('times');

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

function createHeart(e) {
  const heartEl = document.createElement('i');
  heartEl.classList.add('fas', 'fa-heart');

  const x = e.clientX;
  const y = e.clientY;
  const offsetLeft = loveMe.offsetLeft;
  const offsetTop = loveMe.offsetTop;
  const xInside = x - offsetLeft;
  const yInside = y - offsetTop;

  heartEl.style.left = `${xInside}px`;
  heartEl.style.top = `${yInside}px`;

  loveMe.appendChild(heartEl);

  times.innerHTML = ++timesClicked;

  setTimeout(() => heartEl.remove(), 1000);
}
