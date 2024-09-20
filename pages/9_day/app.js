const labels = document.querySelectorAll('.label');

labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${30 * idx}ms;">${letter}</span>`
    )
    .join('');
});
