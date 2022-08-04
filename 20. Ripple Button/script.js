const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', function (event) {
    const x = event.clientX;
    const y = event.clientY;

    const buttonLeft = event.target.offsetLeft;
    const buttonTop = event.target.offsetTop;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.left = `${xInside}px`;
    circle.style.top = `${yInside}px`;

    // refers to current element
    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
