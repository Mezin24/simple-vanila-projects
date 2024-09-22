const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateNewJoke();
jokeBtn.addEventListener('click', generateNewJoke);

async function generateNewJoke() {
  joke.innerText = 'Loading...';

  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const res = await fetch('https://icanhazdadjoke.com/', config);
  const data = await res.json();
  joke.innerText = data.joke;
}
