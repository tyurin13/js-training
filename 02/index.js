// Task 0

function sayHello(name) {

  if (name === 'Mark') {

    return "Hi, Mark!";

  } else {

    return "Hello, " + name;
  }
}

// Task 1

function min(a,b) {

  if (a>b) {

    return b;

  } else {

    return a;

  }
}

// Task 2

function pow(x,n) {

  if (Number.isInteger(n)) {

    return x ** n;
  }
}

// Task 3

function isEven(n) {

return n % 2 === 0;
}

// Task 4

function deleteChars(str) {

  return str.substr(1, str.length - 2);
}

// Task 5

function convertFloor(floor) {

  let regFloor;

  if (Number.isInteger(floor) && floor > 0 && floor < 13) {

    return regFloor = floor + 1;

  } else if (Number.isInteger(floor) && floor < -12) {

    return regFloor = floor -1;
  } else if (Number.isInteger(floor)) {

    return regFloor = floor;
  }
}

// Task 6

function convertType(value, toType) {

  if (toType === 'boolean') {
    return Boolean(value);
  } else if (toType === 'string') {
    return String(value);
  } else if (toType === 'number') {
    return Number(value);
  }
}

function convertType1(value, toType) {

  switch (toType) {

    case 'boolean':
      Boolean(value);
      break;

    case 'string':
      String(value);
      break;

    case 'number':
      Number(value);
      break;
  }
}


let convertType2 = function (value, toType) {

  if (toType === 'boolean') {
    return Boolean(value);
  } else if (toType === 'string') {
    return String(value);
  } else if (toType === 'number') {
    return Number(value);
  }
}

let convertType3 = (value, toType) => {

  if (toType === 'boolean') {
    return Boolean(value);
  } else if (toType === 'string') {
    return String(value);
  } else if (toType === 'number') {
    return Number(value);
  }
}
