const nav = document.querySelector('.nav');

window.addEventListener('scroll', growOrShrinkNav);

function growOrShrinkNav() {
  console.log(window.scrollY);

  if (nav.offsetHeight + 50 < window.scrollY) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}
