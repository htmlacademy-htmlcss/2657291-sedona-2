const modalContainer = document.querySelector('.modal-container');
const openModalButton = document.querySelector('.button-modal-open');
const closeModalButton = document.querySelector('.modal-close-button');

openModalButton.addEventListener('click', () => {
  modalContainer.classList.remove('modal-container-close');
})

closeModalButton.addEventListener('click', () => {
  modalContainer.classList.add('modal-container-close');
})
