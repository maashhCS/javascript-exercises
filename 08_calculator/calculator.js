const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num) {
  let sum = 0;
  for(let i = 0; i < num.length; i++){
    sum += num[i];
  }
  return sum;
};

const multiply = function(num) {
  let multi = 1;
  for(let i = 0; i < num.length; i++){
    multi = multi * num[i]; 
  }
  return multi;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  if (num === 0) return 1;
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
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
