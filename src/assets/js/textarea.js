const textArea = document.querySelectorAll('[data-autoresize]');

textArea.forEach((item) => {
  let textAreaHeight = item.offsetHeight;
  item.addEventListener('input', (evt) => {
    let element = evt.target;

    element.style.height = textAreaHeight + 'px';
    element.style.height = element.scrollHeight + 'px';
  });
});
