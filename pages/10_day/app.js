const sounds = ['boo', 'applause', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    const audio = document.getElementById(sound);
    stopSound();
    audio.play();
  });

  document.body.appendChild(btn);
});

function stopSound() {
  const audios = document.querySelectorAll('audio');
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}
