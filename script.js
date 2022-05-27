'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btns = document.querySelectorAll('.show-modal');
const hidden = document.querySelectorAll('.hidden'); //hidden is Array

const openModal = function () {
  for (let i = 0; i < hidden.length; i++) hidden[i].classList.remove('hidden');
};

const closeModal = function () {
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].classList.add('hidden');
  }
};

// for buttons ⬇️
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Here 'o' stands for Object.
document.addEventListener('keydown', function (o) {
  console.log(o.key);
  if (o.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    console.log('Hidden class added');
  }
});
