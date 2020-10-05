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
      if (regex.test(objNames[i])) {
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
  return this + term;
}

Number.prototype.minus = function(subtrahend) {
  return this - subtrahend;
}

Number.prototype.multiply = function(multiplier) {
  return this * multiplier;
}

Number.prototype.divide = function(divider) {
  return this / divider;
}

const a = (125).add(2).multiply(2).divide(3).minus(12);
console.log(a);