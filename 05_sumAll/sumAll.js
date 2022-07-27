const sumAll = function(firstNumber, secondNumber) {

    if(!validate(firstNumber, secondNumber)){
        return "ERROR";
    }

    const myArguments = Array.from(arguments);
    myArguments.sort();

    let sum = 0;

    for(let i=myArguments[0]; i<=myArguments[1]; i++){
        sum += i;
    }

    return sum;

};

function validate(parameter1, parameter2){

    if(typeof(parameter1) == 'number' && 
       typeof(parameter2) == 'number' &&
       parameter1 >= 0 && parameter2 >= 0){

        return true;
    }else{

        return false;
    }
}

// Do not edit below this line
module.exports = sumAll;
