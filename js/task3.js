// отримаю посилання на form, span
const formRef = document.querySelector('form');
const spanRef = document.querySelector('span');

formRef.addEventListener('submit', e => {
  // скидаю налаштування, щоб не оновлювалася сторінка при натисканні на submit
  e.preventDefault();

  // отримую значення з input
  const word = e.currentTarget.input.value;
  // роблю з рядка - масив
  const array = word.split('');

  // очищаю місце де буде відмальовуватися перевернуте слово
  spanRef.textContent = '';

  // перевертання слова
  for (let i = 0; i < array.length / 2; i += 1) {
    let temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }

  // очищаю input
  formRef.reset();
  // виклик функції відмалювання розвернутого слова
  renderMarkup(array);
});

// функція відмалювання розвернутого слова
function renderMarkup(word) {
  spanRef.textContent = word.join('');
}
