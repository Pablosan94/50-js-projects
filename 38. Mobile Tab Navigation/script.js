const contents = document.querySelectorAll('img');
const buttons = document.querySelectorAll('nav ul li');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    hideAllContents();
    hideAllItems();

    button.classList.add('active');
    contents[index].classList.add('show');
  });
});

function hideAllContents() {
  contents.forEach((content) => {
    content.classList.remove('show');
  });
}

function hideAllItems() {
  buttons.forEach((button) => {
    button.classList.remove('active');
  });
}
