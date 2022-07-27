const fibonacci = function(input) {

    //convert input to number
    let theInput = Number(input);

    //return if it is negative
    if(theInput < 0){
        return "OOPS";
    }

    //create the fibanocci sequence, but return at the specified element
    let fibanocci = [];
    for(let i=0; i <= theInput; i++){
        if(i == 0 || i == 1){
            fibanocci[i] = 1;
            if(i == theInput - 1){
                return 1;
            }
        }else{
            fibanocci[i] = fibanocci[i-1] + fibanocci[i-2];
            if(i == theInput - 1){
                return fibanocci [i];
            }
        }
    }

};

// Do not edit below this line
module.exports = fibonacci;
