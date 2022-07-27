const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(givenArray) {
	
  let sum = 0;
  for(const number of givenArray){
    sum += number;
  }

  return sum;
};

const multiply = function(givenArray) {
  let product = 1;
  for(const number of givenArray){
    product *= number;
  }

  return product;
};

const power = function(number, power) {
	
  let result = number;
  for(let i = 0; i < power - 1; i++){
    result *= number;
  }

  return result;
};

const factorial = function(number) {

  if(number == 0){
    return 1;
  }

  let result = 1;

  for(let i = number; i > 0; i--){
    result *= i;
  }

  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
