const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadingText.innerHTML = `${load}%`;
  const blur = scale(load, 0, 100, 30, 0);
  const opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${blur}px)`;
  loadingText.style.opacity = opacity;
}
