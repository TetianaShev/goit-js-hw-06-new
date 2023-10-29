const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {

  event.preventDefault();

  console.log(event.currentTarget)

  const formEl = event.currentTarget.elements;

  if (formEl.email.value === "" || formEl.password.value === "") {
    return alert(" Заповніть всі поля ");
  }
  const email = formEl.email.value;
  const password = formEl.password.value;

  const formData = {
    email, password,
  }
  
  console.log(`email: ${formEl.email.value}, Password: ${formEl.password.value}`);
   
  this.reset();
  
    // console.log(formData);
//   formEl.email.value = ``;
//   formEl.password.value = ``;
 // event.currentTarget.reset(); 

}