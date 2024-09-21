const container = document.querySelector('.container');
const leftSplit = document.querySelector('.split.left');
const rightSplit = document.querySelector('.split.right');

leftSplit.addEventListener('mouseenter', () =>
  container.classList.add('left-hover')
);
leftSplit.addEventListener('mouseleave', () =>
  container.classList.remove('left-hover')
);

rightSplit.addEventListener('mouseenter', () =>
  container.classList.add('right-hover')
);
rightSplit.addEventListener('mouseleave', () =>
  container.classList.remove('right-hover')
);
