const panel = document.getElementById('panel');
const ratings = document.querySelectorAll('.rating');
const sendBtn = document.getElementById('send');
let selectedRating = 'Satisfied';

panel.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    if (e.target.nextElementSibling) {
      selectedRating = e.target.nextElementSibling.innerHTML;
    } else {
      selectedRating = e.target.innerHTML;
    }
  } else if (e.target.classList.contains('rating')) {
    removeActive();
    e.target.classList.add('active');
    selectedRating = e.target.children[1].innerHTML;
  }
});

sendBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br />
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer service!</p>
  `;
});

function removeActive() {
  ratings.forEach((rating) => rating.classList.remove('active'));
}
