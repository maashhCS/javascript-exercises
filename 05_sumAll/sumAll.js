const sumAll = function(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'ERROR';
    }
    if(num1 < 0 || num2 < 0){
        return 'ERROR';
    }
    let number2 = Math.max(num1, num2);
    let number1 = Math.min(num1, num2);
    let returnNumber = 1;
    for(let i = 0; i < number2 - number1; i++){
        returnNumber += number1 + i + 1;
    }
    return returnNumber;
};

// Do not edit below this line
module.exports = sumAll;
