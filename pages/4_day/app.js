const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const container = document.querySelector('.search-input');

btn.addEventListener('click', () => {
  container.classList.toggle('active');
  input.focus();
});
