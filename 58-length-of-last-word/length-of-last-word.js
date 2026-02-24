/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let s2 = s.trimEnd();
    let checkString = [];
    let a = 0
    for(let i = s2.length - 1, j = 0; i >= 0; i--, j++){
        if(s2[i] == " " ){
            break;
        }
        checkString[j] = s2[i];
    }
    a = checkString.length; 
    return a
};