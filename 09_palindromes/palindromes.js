const palindromes = function (givenPhrase) {

    //convert to lowercase
    givenPhrase = givenPhrase.toLowerCase();

    //remove . ! and ,
    givenPhrase = givenPhrase.replaceAll(".", "");
    givenPhrase = givenPhrase.replaceAll(",", "");
    givenPhrase = givenPhrase.replaceAll("!", "");

    //join the entire phrase together
    givenPhrase = givenPhrase.replace(/\s+/g, '');

    //generate a reversed String
    let reversedString = ""  
    for(let i=givenPhrase.length; i >= 0; i--){
            reversedString += givenPhrase.charAt(i);
    }
        
    

    //compare the two Strings
    for(let i=0; i<givenPhrase.length; i++){
        if(givenPhrase.charAt(i) !== reversedString.charAt(i)){
            return false;
        }
    }

    return true;
};



// Do not edit below this line
module.exports = palindromes;
