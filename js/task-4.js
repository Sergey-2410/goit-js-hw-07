const form = document.querySelector('.login-form');
console.log('🚀 ~ form:', form);
const formSubmit = event => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email;
  const password = form.elements.password;
  if (!email.value || !password.value) {
    return alert('All form fields must be filled in');
  }
  const dataForm = {
    email: email.value,
    pass: password.value,
  };
  console.log('dataForm :', dataForm);

  form.reset();
};
form.addEventListener('submit', formSubmit);
