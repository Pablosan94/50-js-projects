const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const hourNeedleEl = document.querySelector('.needle.hour')
const minuteNeedleEl = document.querySelector('.needle.minute')
const secondNeedleEl = document.querySelector('.needle.second')
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

toggleEl.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark mode';
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light mode';
  }
});
setTime();

setInterval(setTime, 1000);

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDate();
  const hours = time.getHours();
  const hourForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  // const ampm = hours >= 12 ? 'PM' : 'AM';

  if (hours === 0) {
    hourNeedleEl.style.transition = 'all 1ms ease-in';
  } else {
    hourNeedleEl.style.transition = 'all 0.2s ease-in';
  }

  if (minutes === 0) {
    minuteNeedleEl.style.transition = 'all 1ms ease-in';
  } else {
    minuteNeedleEl.style.transition = 'all 0.2s ease-in';
  }

  if (seconds === 0) {
    secondNeedleEl.style.transition = 'all 1ms ease-in';
  } else {
    secondNeedleEl.style.transition = 'all 0.2s ease-in';
  }

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hourForClock,
    0,
    12,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

  timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${day}</span>`;
}

function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
