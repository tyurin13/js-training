//Task 1

function fizzBuzz(n) {
  
  for (let i = 1; i <= n; i++){

    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz!');
    }

    else if (i % 3 === 0) {
      console.log('Fizz')
    }

    else if (i % 5 === 0){
      console.log('Buzz')
    }

    else {
      console.log(i);
      
    }
    

  }

}

fizzBuzz(15);

//Task 2

function toNumber(value) {
  
  valueNumber = Number(value);
  
  if (isNaN(valueNumber)) {

    return null;
  } else {
    return valueNumber;
  }

}

toNumber("abc");


//Task 3

function createUser(name, age, height, weight) {

  const skills = {
    run: weight < 100 ? true : false,
    volleyball: (weight < 90 && height > 185) ? true : false,
    videoGames: ((age < 18 && height > 140) || weight >130) ? true : false,
  }

  const user = {
    name,
    age,
    height,
    weight,
    skills
  }

  if (typeof name === "string" && typeof age === "number" && typeof height === "number" && typeof weight === "number") {
    return user;
  } else {
    return null;
  }
}

createUser("Peter", 40, 186, 80);

//Task 4

function isPalindrom(word) {

  const wordLength = word.length;
  
  for (let i = 0; i < wordLength; i++) {

    if (!(word[i] === word[wordLength - 1 - i])) {
      
      return false;

    } else {

      return true;
      
    }

  }
}

isPalindrom('mobile');

// Task 5

function quadraticEquation(a, b, c) {

  const D = b**2 - 4 * a * c;

  const xOne = (-b + D**0.5) / (2 * a);

  const xTwo = (-b - D**0.5) / (2 * a);

  let eqSolution = [];

  if (D < 0) {
    
    return eqSolution;
    
  } else if (D === 0) {
      
      eqSolution = [xOne];

      return eqSolution;
    
  } else if (D > 0) {

    eqSolution = [xOne, xTwo];

    return eqSolution;
  }
}

quadraticEquation(1, 6, 1);


