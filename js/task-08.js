const form = document.querySelector('.login-form');
const email = form.elements.email.value;
const password = form.elements.password.value;



const onFormSubmit = (event) => {
  event.preventDefault();
  const {
    elements: {
      email: { value: email },
      password: { value: password },
    },
  } = event.currentTarget;

  !email || !password
    ? alert('Пожалуйста, заполните ВСЕ поля')
    : console.log({ email: password });

  form.reset();
};

form.addEventListener('submit', onFormSubmit);
