const resultsContainer = document.getElementById('results');
const filter = document.getElementById('filter');
const listItems = [];

filter.addEventListener('input', (e) => {
  filterData(e.target.value);
});

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50');
  const { results } = await res.json();

  resultsContainer.innerHTML = '';

  results.forEach((user) => {
    const userEl = document.createElement('li');
    listItems.push(userEl);

    userEl.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}" />
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;

    resultsContainer.appendChild(userEl);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}

getData();
