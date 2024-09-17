const boxes = document.querySelectorAll('.box');

showContent();
window.addEventListener('scroll', showContent);

function showContent() {
  const triggerPoint = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxPosition = box.getBoundingClientRect().top;
    boxPosition > triggerPoint
      ? box.classList.remove('show')
      : box.classList.add('show');
  });
}
