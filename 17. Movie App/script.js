const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6787fd13c809932f81c2c8e6ff406879&page=1';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=6787fd13c809932f81c2c8e6ff406879&query=';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

getMovies(API_URL);
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(`${SEARCH_URL}"${searchTerm}"`);
    search.value = '';
  } else {
    window.location.reload();
  }
});

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
      <img src="${IMAGE_URL + poster_path}" alt="${title}" />
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRating(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `;

    main.appendChild(movieEl);
  });
}

function getClassByRating(vote_average) {
  if (vote_average >= 8) {
    return 'green';
  } else if (vote_average >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}
