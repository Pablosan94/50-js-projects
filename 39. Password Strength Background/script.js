const INITIAL_BLUR_VALUE = 20;

const background = document.getElementById('background');
const password = document.getElementById('password');

background.style.filter = `blur(${INITIAL_BLUR_VALUE}px)`;

password.addEventListener('input', (e) => {
  const input = e.target.value;
  const blurValue =
    INITIAL_BLUR_VALUE - input.length * (INITIAL_BLUR_VALUE / 10);
  background.style.filter = `blur(${blurValue}px)`;
});
