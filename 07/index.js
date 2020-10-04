//Task 2

function Modal() {
   
  this.show = function(name) {
    console.log(`show ${this.name}`)
  }

  this.hide = function(name) {
    console.log(`hide ${this.name}`)
  }
}

function Warning(name, message) {
 
  this.name = name;
  this.message = message;
}

function Success(name, message) {

  this.name = name;
  this.message = message;
}

Warning.prototype = new Modal();
Success.prototype = new Modal();

//Task 3

const obj = {
  bingoBall: 2
}

const obj2 = {
  bingeBall: 2
}

function Bingo() {
  this.bingo = function() {

    const objNames = Object.getOwnPropertyNames(this);
    const regex = /^bingo/;

    for (let i = 0; i < objNames.length; i++) {
      if (i === regex) {
        console.log('Bingo!')
      }

    }
  }
}

obj.__proto__ = new Bingo ();
obj2.__proto__ = new Bingo();

obj.bingo();

// Task 4

class Anouncer {
  present() {
    alert(`Hello, I am ${this.type} and I have size ${this.size}`)
  }
}

class Figure extends Anouncer {
  constructor(size) {
    super();
    this.size = size;
  }
}

class Circle extends Figure {

  constructor(type, size) {
    super(size);
    this.type = type
  }

  getArea(){}
}

class Square extends Figure {

  constructor(type, size) {
    super(size);
    this.type = type
  }

  getArea(){}
}

//Task 5

Number.prototype.add = function(term) {
  this.valueOf += term;
}

Number.prototype.minus = function(subtrahend) {
  Number(value) -= subtrahend;
}

Number.prototype.multiply = function(multiplier) {
  Number(value) = multiplier * Number(value);
}

Number.prototype.divide = function(divider) {
  Number(value) = Number(value) / divider
}

const a = Number(8).add(2);
console.log(a)