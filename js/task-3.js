const inputEl = document.querySelector('#name-input');
console.log('🚀 ~ inputEl:', inputEl);
const spanEl = document.querySelector('#name-output');
console.log('🚀 ~ spanEl:', spanEl);
const eventInput = event => {
  const inputValue = event.target.value.trim();
  if (inputValue) {
    spanEl.textContent = inputValue;
  } else {
    spanEl.textContent = 'Anonymous';
  }
};
inputEl.addEventListener('input', eventInput);
