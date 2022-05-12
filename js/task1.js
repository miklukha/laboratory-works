// отримаю посилання на form, label, ul
const formRef = document.querySelector('form');
const labelRef = document.querySelector('label');
const listRef = document.querySelector('ul');

formRef.addEventListener('submit', e => {
  // скидаю налаштування, щоб не оновлювалася сторінка при натисканні на submit
  e.preventDefault();

  // отримую значення з input
  const words = e.currentTarget.input.value;
  // обрізаю пробіли з боків, залишаю лише один пробіл між словами і роблю з рядка - масив
  const arrayOfWords = words.trim().split(/\.|\s+/);
  let smallestNumber = 8;

  labelRef.textContent = 'Введіть текст:';

  // перевіряю чи в масиві немає пробілів (чи точно всі слова)
  for (let i = 0; i < arrayOfWords.length; i += 1) {
    if (arrayOfWords[i] === '') {
      // splice - вирізає елемент з масиву
      arrayOfWords.splice(i, 1);
      continue;
    }

    // перевіряю кількість введених слів
    if (arrayOfWords.length < 2 || arrayOfWords.length > 50) {
      labelRef.textContent = 'Кількість слів має бути від 2 до 50';
      // очищаю input та список
      listRef.innerHTML = '';
      formRef.reset();
      return;
    }

    // знаходжу найменшу кількість букв в словах
    if (arrayOfWords[i].length <= 8) {
      if (arrayOfWords[i].length < smallestNumber) {
        smallestNumber = arrayOfWords[i].length;
      }
    }
  }

  const firstWord = arrayOfWords[0];

  // знаходжу слова, що підходять під умову завдання
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
    // очищаю input та список
    listRef.innerHTML = '';
    formRef.reset();
    return;
  }

  // очищаю input
  formRef.reset();
  // виклик функції відмалювання слів, що підходять під умову
  renderMarkup(arrayOfWords);
});

// функція відмалювання слів, що підходять під умову
function renderMarkup(array) {
  const listMarkup = array
    .map(item => `<li class="works-item">${item}</li>`)
    .join('');
  listRef.innerHTML = listMarkup;
}
