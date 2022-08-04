const MILLIS_TO_DRINK = 2000;
const CUP_SIZE_IN_MILLIS = 250;
const MILLIS_IN_A_LITER = 1000;

const goal = document.getElementById('goal');
goal.innerText = `Goal: ${MILLIS_TO_DRINK / MILLIS_IN_A_LITER} Liters`;

const cups = document.getElementById('cups');
for (let i = 0; i < MILLIS_TO_DRINK; i += CUP_SIZE_IN_MILLIS) {
  const smallCup = document.createElement('div');
  smallCup.classList.add('cup', 'cup-small');
  smallCup.innerText = `${CUP_SIZE_IN_MILLIS} ml`;
  cups.appendChild(smallCup);
}

const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remaining = document.getElementById('remaining');
updateBigCup();

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => {
    highlightCups(index);
  });
});

function highlightCups(index) {
  if (
    smallCups[index].classList.contains('full') &&
    !smallCups[index].nextElementSibling?.classList.contains('full')
  ) {
    index--;
  }

  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = document.querySelectorAll('.cup-small').length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
    percentage.innerText = '';
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remaining.style.visibility = 'hidden';
    remaining.style.height = 0;
  } else {
    remaining.style.visibility = 'visible';
    liters.innerText = `${(MILLIS_TO_DRINK - (CUP_SIZE_IN_MILLIS * fullCups)) / 1000}L`
  }
}
