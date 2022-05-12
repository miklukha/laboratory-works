// отримаю посилання на form, ul
const formRef = document.querySelector('form');
const ulRef = document.querySelector('ul');

formRef.addEventListener('submit', e => {
  // скидаю налаштування, щоб не оновлювалася сторінка при натисканні на submit
  e.preventDefault();

  // отримую значення з input
  const input = e.currentTarget.input.value;
  // роблю з рядка - масив
  const array = input.split('');

  // перевіряю чи введені значення числа і не дорівнюють пробілу
  for (let i = 0; i < array.length; i += 1) {
    if (isNaN(array[i]) || array[i] === ' ') {
      array.splice(i, 1);
      i -= 1;
    }
  }

  // очищаю input
  formRef.reset();
  // виклик функції відмалювання чисел
  renderMarkup(array);
});

// функція відмалювання чисел
function renderMarkup(array) {
  const markup = array
    .map(element => `<li class="works-item">${element}</li>`)
    .join('');
  ulRef.innerHTML = markup;
}
