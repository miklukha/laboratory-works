const formRef = document.querySelector('form');
const labelRef = document.querySelector('label');
const listRef = document.querySelector('ul');

formRef.addEventListener('submit', e => {
  e.preventDefault();

  const words = e.currentTarget.input.value;
  const arrayOfWords = words.trim().split(/\.|\s+/);
  let smallestNumber = 8;

  labelRef.textContent = 'Введіть текст:';

  if (arrayOfWords.length < 2 || arrayOfWords.length > 50) {
    labelRef.textContent = 'Кількість слів має бути від 2 до 50';
    listRef.innerHTML = '';
    formRef.reset();
    return;
  }

  for (let i = 0; i < arrayOfWords.length; i += 1) {
    if (arrayOfWords[i] === '') {
      arrayOfWords.splice(i, 1);
      continue;
    }

    if (arrayOfWords[i].length <= 8) {
      if (arrayOfWords[i].length < smallestNumber) {
        smallestNumber = arrayOfWords[i].length;
      }
    }
  }

  const firstWord = arrayOfWords[0];

  for (let i = 0; i < arrayOfWords.length; i += 1) {
    if (
      arrayOfWords[i] === firstWord ||
      arrayOfWords[i].length !== smallestNumber
    ) {
      arrayOfWords.splice(i, 1);
      i -= 1;
    }
  }

  if (arrayOfWords.length === 0) {
    labelRef.textContent = 'На жаль, немає слів, що підходять';
    listRef.innerHTML = '';
    formRef.reset();
    return;
  }

  formRef.reset();
  renderMarkup(arrayOfWords);
});

function renderMarkup(array) {
  const listMarkup = array
    .map(item => `<li class="works-item">${item}</li>`)
    .join('');
  listRef.innerHTML = listMarkup;
}
