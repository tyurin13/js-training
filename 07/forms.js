const tabActive = document.getElementById('tabActive');
const tab = document.getElementById('tab');
const signUp = document.getElementById('signup');
const logIn = document.getElementById('login');

tab.addEventListener('click', (event) => {

  logIn.style.display = 'block';
  signUp.style.display = 'none';
})

tabActive.addEventListener('click', (event) => {

  signUp.style.display = 'block';
  logIn.style.display = 'none';
})

const signUpForm = document.forms.signup;
const btn = document.getElementById('btn');
const invalidClass = 'invalid';


const newUser = {
  firstName: {
    value: '',
    valid: false,
    checkValidation() {
      this.firstName.valid = this.firstName.value !== '';
    }
  },

  lastName: {
    value: '',
    valid: false,
    checkValidation() {
      this.lastName.valid = this.lastName.value !== '';
    }
  },

  email: {
    value: '',
    valid: false,
    checkValidation() {
      this.email.valid = this.email.value !== '' && this.email.value == /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    }
  },

  pw: {
    value: '',
    valid: false,
    checkValidation() {
      this.pw.valid = this.pw.value !== '';
    }
  },

  checkFormValidation() {
    for (const key in this) {
      if (typeof this[key] !== 'function' && this[key].valid === false) {
        return false
      }
    }
  },

  getValue() {
    return {

      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      pw: this.pw.value
    }
  }
  
}

signUpForm.addEventListener('input', (event) => {
  
  event.preventDefault();
  const signupValue = event.target.value;
  const signupName = event.target.name;
  const bindedValidator = newUser[signupName].checkValidation.bind(newUser);
  bindedValidator();

  btn.disabled = !newUser.checkFormValidation();

  newUser[signupName].value = signupValue;

  handleClassAdding(event.target, newUser[signupName].valid);
  console.log(newUser);

})

function handleClassAdding(domNode, isValid) {

  if (!isValid) {
    domNode.classList.add(invalidClass)
  } else {
    domNode.classList.remove(invalidClass)
  }
}




