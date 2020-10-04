const form = document.forms.register;
const btn = document.getElementById('btn');
const invalidClass = 'invalid';

const newForm = {
  login: {
    value: '',
    valid: false,
    checkValidation() {
      this.login.valid = this.login.value !== "";
    }
  },

  name: {
    value: '',
    valid: false,
    checkValidation() {
      this.name.valid = this.name.value !== "";
    }
  },

  age: {
    value: '',
    valid: false,
    checkValidation() {
      this.valid = this.value !== "" && typeof this.value === 'number';
    }
  },

  email: {
    value: '',
    valid: false,
    checkValidation() {
      this.valid = this.value !== "";
    }
  },
  
  city: {
    value: '',
    valid: false,
    checkValidation() {
      this.city.valid = this.city.value !== "";
    }
  },

  password: {
    value: '',
    valid: false,
    checkValidation() {
      this.password.valid = this.password.value !== "";
    }
  },

  repeatPassword: {
    value: '',
    valid: false,
    checkValidation() {
      this.repeatPassword.valid = this.password.value === this.repeatPassword.value;
    }
  },
  checkFormValidation() {
    for (const key in this) {

      if (typeof this[key] !== 'function' && this[key].valid === false) {
        return false;
      }
    }
  }
}


form.addEventListener('input', (event) => {

  const value = event.target.value;
  const name = event.target.name;
  const bindedValidator = newForm[name].checkValidation.bind(newForm);
  bindedValidator();

  btn.disabled = !newForm.checkFormValidation();

  newForm[name].value = value;

  handleClassAdding(event.target, newForm[name].valid);
  
})

function handleClassAdding(domNode, isValid) {

  if (isValid) {
    domNode.classList.remove(invalidClass)
  } else {
    domNode.classList.add(invalidClass)
  }
}