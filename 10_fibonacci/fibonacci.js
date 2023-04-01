const fibonacci = function(num) {
    if(typeof(num) === "string"){
        num = Number(num);
    } else if (num < 0){
        return "OOPS";
    };
    let lastNum = 0;
    let currNum = 1;
    let returnNum = 1;
    for(let i = 1; i < num; i++){
        returnNum = lastNum + currNum;
        lastNum = currNum;
        currNum = returnNum;
    }
    return returnNum;
};

// Do not edit below this line
module.exports = fibonacci;
