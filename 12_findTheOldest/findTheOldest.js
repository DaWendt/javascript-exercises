const findTheOldest = function(givenArray) {

    let oldestAge = 0;
    let result;
    for(const person of givenArray){

        let dateForSubtraction = [person.yearOfDeath, person.yearOfBirth];
        if(dateForSubtraction[0] == undefined){
            dateForSubtraction[0] = new Date().getFullYear();
        }
        
        let age = dateForSubtraction[0] - dateForSubtraction[1];

        if(age > oldestAge){
            oldestAge = age;
            result = person;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
