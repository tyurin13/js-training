let inLogin = document.getElementById('login');
let inEmail = document.getElementById('email');
let inPw = document.getElementById('pw');
let inPwRepeat = document.getElementById('pwrepeat');
const btn = document.getElementById('btn');

btn.disabled = 'true';

inLogin.addEventListener('input', (event) =>{

  const isValid = event.target.value.length > 0;
  inLogin.innerText = event.target.value;

  if (!isValid) {
    event.target.classList.add('invalid');
    btn.disabled = 'true';
  } else {
    inLogin.classList.remove('invalid');
    btn.removeAttribute('disabled');
  }
})

inEmail.addEventListener('input', (event) =>{

  const isValid = event.target.value.length > 0 && event.target.value.includes('@');
  inEmail.innerText = event.target.value;

  if (!isValid) {
    event.target.classList.add('invalid');
    btn.disabled = 'true';
  } else {
    inEmail.classList.remove('invalid');
    btn.removeAttribute('disabled');
  }
})

inPw.addEventListener('input', (event) =>{

  const isValid = event.target.value.length > 0;
  inPw.innerText = event.target.value;

  if (!isValid) {
    event.target.classList.add('invalid');
    btn.disabled = 'true';
  } else {
    inPw.classList.remove('invalid');
    btn.removeAttribute('disabled');
  }
})

inPwRepeat.addEventListener('input', (event) =>{

  const isValid = event.target.value.length > 0 && event.target.value === inPw.value;
  inPwRepeat.innerText = event.target.value;

  if (!isValid) {
    event.target.classList.add('invalid');
    btn.disabled = 'true';
  } else {
    inPwRepeat.classList.remove('invalid');
    btn.removeAttribute('disabled');
  }
})

btn.addEventListener('click', function() {

  const user = {
    login: inLogin.value,
    email: inEmail.value,
    password: inPw.value
  }

  console.log(user);

})