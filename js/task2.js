const formRef = document.querySelector('form');
const ulRef = document.querySelector('ul');

formRef.addEventListener('submit', e => {
  e.preventDefault();

  const input = e.currentTarget.input.value;
  const array = input.split('');

  for (let i = 0; i < array.length; i += 1) {
    if (isNaN(array[i]) || array[i] === ' ') {
      array.splice(i, 1);
      i -= 1;
    }
  }

  formRef.reset();
  renderMarkup(array);
});

function renderMarkup(array) {
  const markup = array
    .map(element => `<li class="works-item">${element}</li>`)
    .join('');
  ulRef.innerHTML = markup;
}
