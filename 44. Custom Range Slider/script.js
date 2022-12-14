const range = document.getElementById('range');

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const rangeWidth = getComputedStyle(e.target).getPropertyValue('width');
  const labelWidth = getComputedStyle(label).getPropertyValue('width');
  const numWidth = +rangeWidth.split('px')[0];
  const numLabelWidth = +labelWidth.split('px')[0];

  const MIN = +e.target.min;
  const MAX = +e.target.max;

  const left =
    value * (numWidth / MAX) -
    numLabelWidth / 2 +
    scale(value, MIN, MAX, 10, -10);

  label.style.left = `${left}px`;
  label.innerHTML = value;
});

function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
