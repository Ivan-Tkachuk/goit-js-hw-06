const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    return alert("Всі поля мають бути заповнені!");
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  form.reset();
}

//   const formData = new FormData(event.currentTarget);
//   console.log(formData);

//   formData.forEach((value, name) => {
//      if (value == '') {
//      return alert('Всі поля мають бути заповнені!');
//     }

//     console.log(name);
//     console.log(value);
//   });

//   const formElements = event.currentTarget.elements;

//   console.log(formElements);

//   const email = formElements.email.value;
//   const password = formElements.password.value;
//   console.log(email, password);

//   const formData = {
//     email,
//     password,
//   }

//   console.log(formData);
