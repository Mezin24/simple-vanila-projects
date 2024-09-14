const pallets = document.querySelectorAll('.pallet');

const removeActiveClass = (els) =>
  els.forEach((el) => {
    el.classList.remove('active');
  });

pallets.forEach((pallet) =>
  pallet.addEventListener('click', () => {
    removeActiveClass(pallets);
    pallet.classList.add('active');
  })
);
