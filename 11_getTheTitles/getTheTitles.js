const getTheTitles = function(givenArray) {

    let result = [];

    for(const element of givenArray){
        result.push(element.title);
    }

    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
