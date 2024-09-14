const progressBar = document.querySelector('.progress-bar');
const progressItems = document.querySelectorAll('.progress-item');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');

let currentStep = 1;

function update() {
  prevBtn.disabled = false;
  nextBtn.disabled = false;

  if (currentStep >= progressItems.length) {
    nextBtn.disabled = true;
    currentStep = progressItems.length;
  } else if (currentStep <= 1) {
    prevBtn.disabled = true;
    currentStep = 1;
  }
  progressItems.forEach((item, idx) =>
    currentStep >= idx + 1
      ? item.classList.add('active')
      : item.classList.remove('active')
  );
  progressBar.style.width = `${
    ((currentStep - 1) / (progressItems.length - 1)) * 100
  }%`;
}

nextBtn.addEventListener('click', function () {
  currentStep += 1;
  update();
});

prevBtn.addEventListener('click', function () {
  currentStep -= 1;
  update();
});
