const modalBtn = document.querySelectorAll('[data-modal]');
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');
const body = document.body;

modalBtn.forEach((item) => {
  item.addEventListener('click', (evt) => {
    let btn = evt.currentTarget;
    let modalId = btn.getAttribute('data-modal');
    let modal = document.getElementById(modalId);
    let modalContent = modal.querySelector('.modal__content');

    modalContent.addEventListener('click', (evt) => {
      evt.stopPropagation();
    });

    modal.classList.add('show');
    body.classList.add('no-scroll');

    setTimeout(() => {
      modalContent.style.transform = 'none';
      modalContent.style.opacity = '1';
    }, 1);
  })
});

modalClose.forEach((item) => {
  item.addEventListener('click', (evt) => {
    let currentModal = evt.currentTarget.closest('.modal');

    closeModal(currentModal);
  })
});

modal.forEach((item) => {
  item.addEventListener('click', (evt) => {
    let currentModal = evt.currentTarget;

    closeModal(currentModal);
  })
});

function closeModal(currentModal) {
  let modalContent = currentModal.querySelector('.modal__content');
  modalContent.removeAttribute('style');

  setTimeout(() => {
    currentModal.classList.remove('show');
    body.classList.remove('no-scroll');
  }, 200);
};
