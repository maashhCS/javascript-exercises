const getTheTitles = function(arr) {
    let newarr = [];
    arr.forEach(element => {
        newarr.push(element.title);
    });
    return newarr;
};

// Do not edit below this line
module.exports = getTheTitles;
