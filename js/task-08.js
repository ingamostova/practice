const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  if (!email.value || !password.value) {
    alert("Please enter valid value");
    return;
  }

  console.log({ email: email.value, password: password.value });
  evt.currentTarget.reset();
}
