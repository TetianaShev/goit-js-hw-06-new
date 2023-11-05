const form = document.querySelector(`.login-form`);


form.addEventListener(`submit`, formSubmit);

function formSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    if (email.value === `` || password.value  === ``) {
        alert(`Все поля должны быть заполнены`);
        
    } else {
        const data = {
            email: email.value,
            password: password.value
        }
        console.log(data);
        event.currentTarget.reset();
    }

}





















// const form = document.querySelector(".login-form");
// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(evt) {

//   evt.preventDefault();
//   const formEl = evt.currentTarget.elements;


//   // const { email, password } = evt.currentTarget.elements;
//   if (formEl.email.value === "" || formEl.password.value === "") {
//        return alert("Заповніть всі поля");
//       // console.log(userData);
//   }
//   this.reset();
// } 




// // console.log(event.currentTarget)

//   // const formEl = event.currentTarget.elements;

//   // if (formEl.email.value === "" || formEl.password.value === "") {
//   //   return alert(" Заповніть всі поля ");
//   // }
//   // const email = formEl.email.value;
//   // const password = formEl.password.value;

//   // const formData = {
//   //   email, password,
//   // }
  
//   // console.log(`email: ${formEl.email.value}, Password: ${formEl.password.value}`);
   
//   // this.reset();
  
//     // console.log(formData);
// //   formEl.email.value = ``;
// //   formEl.password.value = ``;
//  // event.currentTarget.reset(); 

