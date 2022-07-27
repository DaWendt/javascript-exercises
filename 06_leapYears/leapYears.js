const leapYears = function(givenYear) {

    //has to be either devisible by 4 or 400
    if(givenYear % 100 == 0){
        if(givenYear % 400 == 0){
            return true;
        }else{
            return false;
        }
    }else if(givenYear % 4 == 0){
        return true;
    }else{
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
