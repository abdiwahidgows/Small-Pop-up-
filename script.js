'use strict';
const modal = document.querySelector('.modal');
const btnsopenmodal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');

console.log(btnsopenmodal);
const openModal = () => {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};
// Open Modal .........>>
for (let a = 0; a < btnsopenmodal.length; a++) {
  btnsopenmodal[a].addEventListener('click', () => {
    console.log('clicked');
    openModal();
  });
}
// function that close the modal
const closemodal = () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};
btnclosemodal.addEventListener('click', () => {
  // iskudaygayi lakin for loopki baan shaqynin
  //   overlay.style.display = 'none';
  //   modal.style.display = 'none';
  //   overlay.classList.add('hidden');
  //   modal.classList.add('hidden');
  closemodal();
});
overlay.addEventListener('click', () => {
  closemodal;
});

document.addEventListener('keydown', kale => {
  // console.log('preessseeed');
  // console.log(kale.key);
  if (kale.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closemodal();
    }
  }
});
