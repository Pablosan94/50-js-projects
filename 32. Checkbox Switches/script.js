const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => doTheTrick(e.target))
);

function doTheTrick(toggle) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === toggle) {
      fast.checked = false;
    } else if (cheap === toggle) {
      good.checked = false;
    } else {
      cheap.checked = false;
    }
  }
}
