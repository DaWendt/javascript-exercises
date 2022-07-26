const removeFromArray = function(array) {

    //access the other arguments by converting them from the arguments[] array
    const myArguments = Array.from(arguments);
    myArguments.splice(0, 1);
    myArguments.sort();

    //should any elements from the arguments be present, remove them using splice()
    for(let i = 0; i < array.length; i++){
        for(const argument of myArguments){
            if(argument === array[i]){
                array.splice(i, 1)
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
