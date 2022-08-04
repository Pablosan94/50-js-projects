const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

async function generateJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
  const data = await res.json();
  joke.innerHTML = data.joke;
}

jokeBtn.addEventListener('click', generateJoke);
generateJoke();
