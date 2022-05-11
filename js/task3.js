const formRef = document.querySelector('form');
const spanRef = document.querySelector('span');

formRef.addEventListener('submit', e => {
  e.preventDefault();

  const word = e.currentTarget.elements.input.value;
  const array = word.split('');

  spanRef.textContent = '';

  for (let i = 0; i < array.length / 2; i += 1) {
    let temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }

  formRef.reset();
  renderMarkup(array);
});

function renderMarkup(word) {
  spanRef.textContent = word.join('');
}
