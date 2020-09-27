const form = document.getElementById('form');

let inEmail = document.getElementById('email');

let inPw = document.getElementById('pw');

const btn = document.getElementById('btn');

const user = {
  email: "123",
  password: "123",
  name: "Player Unknown"
}

inEmail.addEventListener("input", (event) =>{

  const isValid = event.target.value.length > 0;
  inEmail.innerText = event.target.value;
  error.remove();

    if (!isValid) {
    event.target.classList.add("invalid");
    btn.disabled = 'true';
  } else {
    inEmail.classList.remove('invalid');
    btn.removeAttribute('disabled');
  }
})

inPw.addEventListener("input", (event) =>{

  const isValid = event.target.value.length > 0;
  inPw.innerText = event.target.value;
  error.remove();

  if (!isValid) {
    event.target.classList.add("invalid");
    btn.disabled = 'true';
  } else {
    inPw.classList.remove('invalid');
    btn.removeAttribute('disabled');
  }
})

const error = document.createElement('div');

btn.addEventListener("click", function() {

  if (inEmail.value === user.email && inPw.value === user.password) {
    form.remove();
    const sayHello = document.createElement('div');
    sayHello.innerText = `Hello, ${user.name} !`;
    document.body.append(sayHello);
  } else {
    
    error.innerText = 'Вы ввели неверный пароль. Попробуйте снова';
    form.append(error);
    error.style.color = '#ff0000';
    error.style.fontWeight = 'normal';
    form.reset();
  }

})



