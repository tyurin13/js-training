// Task 1

const car = {
  name: "Audi",
  counrty: 'Germany',
  maxSpeed: 200,
  year: 2019
}

for (let key in car) {

  alert(key);

  alert(car[key]);
}

// Task 2

const user = {
  name: 'Sergey',
  email: 'Krivets',
  phone: 375291112233,
  id: '435'
}

const newUser = Object.assign({}, user);


// Task 3

const circle = {
  radius: 20,
  color: 'magenta'
}

circle.calculateCircumference = function() {
  console.log(2 * radius * Math.PI);
}

// Task 4

const message = {
  text: '',

  getMessage(string) {
    text = string;
  },
  
  showMessage() {
    alert(text);
  }
}

// Task 5

const rectangle = {

  width: 100,
  height: 200,

  getArea() {
    let square = this.width * this.height;
  }

}

// Task 6

function isEmpty(obj) {

  for (let key in obj) {

    return false;
  }

  return true;
}

// Task 7

const selfGeneratedUser = {

  getInfo() {

    const name = prompt('Введите имя');
    const email = prompt('Введите адрес электронной почты');
    const phone = prompt('Введите номер телефона');

    const newUser = {name, email, phone}
  },

  introduce() {

    if (newUser.name !== '') { alert(newUser.name); }
    if (newUser.email !== '') { alert(newUser.email); }
    if (newUser.phone !== '') { alert(newUser.phone); }
  }
}

// Task 8

function Dog(name, breed, age) {

  let newName = String(name);
  let newBreed = String(breed);
  let newAge = Number(age);

  const newDog = {
    name: newName,
    age: newAge,
    breed: newBreed,

    intro() {
      console.log(`Woof! I am ${this.name}, and I am ${this.age}. I am ${this.breed}.`);
    },

    bark() {
      console.log('woof! '.repeat(this.age));
    },

    comeHere(word) {

      if (word === this.name) {
        console.log('arf-arf!');
      }
    },

    teach(skill) {

      if ('skills' in newDog === false) {
        newDog.skills = [];
      }

      skills.push(skill);

      if (skills.length > 4) {
        bark = function() {

          console.log(`Hm. I am smarter than you. I have at least ${skills.length} skills. Do it yourself!`);
        }
      }
    }
  }


}